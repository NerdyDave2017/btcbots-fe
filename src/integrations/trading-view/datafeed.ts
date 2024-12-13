import { makeApiRequest, generateSymbol, parseFullSymbol } from "./helpers";
import { subscribeOnStream, unsubscribeFromStream } from "./streaming";

type ExchangesResponse = {
  Data: {
    [key: string]: {
      pairs: {
        [key: string]: string[];
      };
      isActive: boolean;
      isTopTier: boolean;
    };
  };
};

export type SymbolInfo = {
  full_name: string;
  symbol: string;
  ticker: string;
  name: string;
  description: string;
  type: string;
  session: string;
  timezone: string;
  exchange: string;
  minmov: number;
  pricescale: number;
  has_intraday: boolean;
  visible_plots_set: string;
  has_weekly_and_monthly: boolean;
  supported_resolutions: string[];
  volume_precision: number;
  data_status: string;
};

type Bar = {
  time: number;
  low: number;
  high: number;
  open: number;
  close: number;
};

// Use it to keep a record of the most recent bar on the chart
const lastBarsCache = new Map();

const configurationData = {
  // Represents the resolutions for bars supported by your datafeed
  supported_resolutions: ["1", "5", "15", "30", "60", "4H", "1D", "1W", "1M"],
  // The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
  exchanges: [
    { value: "Binance", name: "Binance", desc: "Binance", query: "binance" },
    {
      value: "Kraken",
      name: "Kraken",
      desc: "Kraken bitcoin exchange",
      query: "kraken",
    },
    {
      value: "Coinbase",
      name: "Coinbase",
      desc: "Coinbase",
      query: "coinbase",
    },
    { value: "OKEX", name: "OKEX", desc: "OKEX", query: "okx" },
    { value: "bybit", name: "Bybit", desc: "Bybit", query: "bybit" },
    { value: "bitget", name: "Bitget", desc: "Bitget", query: "bitget" },
    { value: "Gateio", name: "Gate.io", desc: "Gate.io", query: "gate_io" },
    { value: "Gemini", name: "Gemini", desc: "Gemini", query: "gemini" },
    {
      value: "binanceusa",
      name: "Binance US",
      desc: "Binance US",
      query: "binance_us",
    },
  ],
  // The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
  symbols_types: [{ name: "crypto", value: "crypto" }],
};

const queryExchanges = configurationData.exchanges.reduce((acc, exchange) => {
  acc[exchange.query] = exchange.value;
  return acc;
}, {} as Record<string, string>);

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols() {
  const data: ExchangesResponse = await makeApiRequest("data/v3/all/exchanges");

  let allSymbols: Partial<SymbolInfo>[] = [];

  for (const exchange of configurationData.exchanges) {
    const pairs = data.Data[exchange.value]?.pairs;

    for (const leftPairPart of Object.keys(pairs)) {
      const symbols: Partial<SymbolInfo>[] = pairs[leftPairPart].map(
        (rightPairPart) => {
          const symbol = generateSymbol(
            exchange.value,
            leftPairPart,
            rightPairPart
          );
          return {
            symbol: symbol.short,
            ticker: symbol.short,
            description: symbol.short,
            exchange: exchange.value,
            type: "crypto",
          };
        }
      );
      allSymbols = [...allSymbols, ...symbols];
    }
  }
  return allSymbols;
}

export default {
  onReady: (callback: any) => {
    console.log("[onReady]: Method call");
    setTimeout(() => callback(configurationData));
  },

  resolveSymbol: async (
    symbolName: string,
    onSymbolResolvedCallback: any,
    onResolveErrorCallback: any,
    extension: any
  ) => {
    // Exchange from the URL query parameters
    const selectedExchange = new URLSearchParams(window.location.search).get(
      "exchange"
    );

    const symbols = await getAllSymbols();
    const symbolItem = symbols.find(
      ({ ticker, exchange }) =>
        ticker === symbolName &&
        (selectedExchange
          ? exchange === queryExchanges[selectedExchange!]
          : true)
    );
    if (!symbolItem) {
      onResolveErrorCallback("Cannot resolve symbol");
      return;
    }

    // Symbol information object

    const symbolInfo: Partial<SymbolInfo> = {
      ticker: symbolItem.ticker,
      name: symbolItem.symbol,
      description: symbolItem.description,
      type: symbolItem.type,
      session: "24x7",
      timezone: "Etc/UTC",
      exchange: symbolItem.exchange,
      minmov: 1,
      pricescale: 100,
      has_intraday: true,
      visible_plots_set: "ohlc",
      has_weekly_and_monthly: false,
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 2,
      data_status: "streaming",
    };
    onSymbolResolvedCallback(symbolInfo);
  },

  getBars: async (
    symbolInfo: SymbolInfo,
    resolution: any,
    periodParams: any,
    onHistoryCallback: any,
    onErrorCallback: any
  ) => {
    const { from, to, firstDataRequest } = periodParams;
    const parsedSymbol = parseFullSymbol(
      `${symbolInfo.exchange}:${symbolInfo.full_name}`
    );
    const urlParameters: Record<string, any> = {
      e: parsedSymbol?.exchange,
      fsym: parsedSymbol?.fromSymbol,
      tsym: parsedSymbol?.toSymbol,
      toTs: to,
      limit: 2000,
    };
    const query = Object.keys(urlParameters)
      .map(
        (name: string) => `${name}=${encodeURIComponent(urlParameters[name])}`
      )
      .join("&");
    try {
      const data = await makeApiRequest(`data/histoday?${query}`);
      if (
        (data.Response && data.Response === "Error") ||
        data.Data.length === 0
      ) {
        // "noData" should be set if there is no data in the requested period
        onHistoryCallback([], { noData: true });
        return;
      }
      let bars: Bar[] = [];
      data.Data.forEach((bar: Bar) => {
        if (bar.time >= from && bar.time < to) {
          bars = [
            ...bars,
            {
              time: bar.time * 1000,
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
            },
          ];
        }
      });
      if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.full_name, {
          ...bars[bars.length - 1],
        });
      }
      console.log(`[getBars]: returned ${bars.length} bar(s)`);
      onHistoryCallback(bars, { noData: false });
    } catch (error) {
      console.log("[getBars]: Get error", error);
      onErrorCallback(error);
    }
  },

  searchSymbols: async (
    userInput: string,
    exchange: string,
    symbolType: any,
    onResultReadyCallback: any
  ) => {
    const symbols = await getAllSymbols();
    const newSymbols = symbols.filter((symbol) => {
      const isExchangeValid = exchange === "" || symbol.exchange === exchange;
      const fullName = `${symbol.exchange}:${symbol.ticker}`;
      const isFullSymbolContainsInput =
        fullName.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;
      return isExchangeValid && isFullSymbolContainsInput;
    });
    onResultReadyCallback(newSymbols);
  },

  subscribeBars: (
    symbolInfo: SymbolInfo,
    resolution: any,
    onRealtimeCallback: any,
    subscriberUID: string,
    onResetCacheNeededCallback: any
  ) => {
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.full_name)
    );
  },

  unsubscribeBars: (subscriberUID: string) => {
    unsubscribeFromStream(subscriberUID);
  },
};

import bitcoin from "@/public/assets/icons/bitcoin.svg";
import ethereum from "@/public/assets/icons/ethereum.svg";
import solana from "@/public/assets/icons/solana.svg";
import usdc from "@/public/assets/icons/usdc.svg";
import usdt from "@/public/assets/icons/usdt.svg";
import okx from "@/public/assets/icons/okx.svg";
import kraken from "@/public/assets/icons/Kraken.svg";
import full_gate_io from "@/public/assets/icons/full-gate-io.svg";
import coinbase from "@/public/assets/icons/coinbase.svg";
import gemini from "@/public/assets/icons/gemini.svg";
import binance from "@/public/assets/icons/binance.svg";
import binance_us from "@/public/assets/icons/binance-us.svg";
import bybit from "@/public/assets/icons/bybit.svg";
import bitget from "@/public/assets/icons/bitget.svg";
import usdt_usdc from "@/public/assets/icons/usdt_usdc.svg";

export const en_videos: Record<string, any> = {
  "All about crypbots.io":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Intro+to+Cryptobots.io.mp4",
  "Step By Step to get started":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Getting+started.mp4",
  "Affiliate Program":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Affiliate+Prog.mp4",
  Overview:
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Overview.mp4",
};

export const es_videos: Record<string, any> = {
  "All about crypbots.io":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Intro+to+Cryptobots.io+Spanish.mp4",
  "Step By Step to get started":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Getting+Started+Spanish.mp4",
  "Affiliate Program":
    "https://cryptobots-assets.s3.us-east-1.amazonaws.com/frontend/videos/Affiliate+Prog+Spanish.mp4",
};

export const btc_params = {
  logo: bitcoin,
  denomination: "BTC",
  bot: "Bitcoin",
};

export const eth_params = {
  logo: ethereum,
  denomination: "ETH",
  bot: "Ethereum",
};

export const sol_params = {
  logo: solana,
  denomination: "SOL",
  bot: "Solana",
};

export const usd_params = {
  logo: usdt_usdc,
  denomination: "USD",
  bot: "USD",
};

export const CB001 = {
  ...btc_params,
  profitCurrencyImg: bitcoin,
  depositCurrencyImg: bitcoin,
  strategy: {
    name: "CB001",
    return: "2%+",
    direction: "BEAR",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT",
    deposit_coin: "btc",
    profit_coin: "btc",
    safety_net: "N/A",
    isAvailable: false,
  },
  wallets: [
    binance,
    bybit,
    kraken,
    okx,
    coinbase,
    binance_us,
    full_gate_io,
    gemini,
  ],
  exchanges: [
    "Binance",
    "Bybit",
    "Kraken",
    "OKX",
    "Coinbase",
    "Binance US",
    "Gate.io",
    "Gemini",
  ],
};

export const CB002 = {
  ...btc_params,
  profitCurrencyImg: bitcoin,
  depositCurrencyImg: bitcoin,
  strategy: {
    name: "CB002",
    return: "2%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Inverse Derivatives",
    deposit_coin: "btc",
    profit_coin: "btc",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx, full_gate_io],
  exchanges: ["Binance", "Bybit", "OKX", "Gate.io"],
};

export const CB003 = {
  ...btc_params,
  profitCurrencyImg: usdt_usdc,
  depositCurrencyImg: bitcoin,
  strategy: {
    name: "CB003",
    return: "2%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Linear Derivatives",
    deposit_coin: "btc",
    profit_coin: "usd",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx, full_gate_io],
  exchanges: ["Binance", "Bybit", "OKX", "Gate.io"],
};

export const CB004 = {
  ...eth_params,
  profitCurrencyImg: ethereum,
  depositCurrencyImg: ethereum,
  strategy: {
    name: "CB004",
    return: "3%+",
    direction: "BEAR",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT",
    deposit_coin: "eth",
    profit_coin: "eth",
    safety_net: "N/A",
    isAvailable: false,
  },
  wallets: [
    binance,
    bybit,
    kraken,
    okx,
    coinbase,
    binance_us,
    full_gate_io,
    gemini,
  ],
  exchanges: [
    "Binance",
    "Bybit",
    "Kraken",
    "OKX",
    "Coinbase",
    "Binance US",
    "Gate.io",
    "Gemini",
  ],
};

export const CB005 = {
  ...eth_params,
  profitCurrencyImg: ethereum,
  depositCurrencyImg: ethereum,
  strategy: {
    name: "CB005",
    return: "3%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Inverse Derivatives",
    deposit_coin: "eth",
    profit_coin: "eth",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx],
  exchanges: ["Binance", "Bybit", "OKX"],
};

export const CB006 = {
  ...eth_params,
  profitCurrencyImg: usdt_usdc,
  depositCurrencyImg: ethereum,
  strategy: {
    name: "CB006",
    return: "3%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Linear Derivatives",
    deposit_coin: "eth",
    profit_coin: "usd",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx, full_gate_io],
  exchanges: ["Binance", "Bybit", "OKX", "Gate.io"],
};

export const CB007 = {
  ...sol_params,
  profitCurrencyImg: solana,
  depositCurrencyImg: solana,
  strategy: {
    name: "CB007",
    return: "4%+",
    direction: "BEAR",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT",
    deposit_coin: "sol",
    profit_coin: "sol",
    safety_net: "N/A",
    isAvailable: false,
  },
  wallets: [
    binance,
    bybit,
    kraken,
    okx,
    coinbase,
    binance_us,
    full_gate_io,
    gemini,
  ],
  exchanges: [
    "Binance",
    "Bybit",
    "Kraken",
    "OKX",
    "Coinbase",
    "Binance US",
    "Gate.io",
    "Gemini",
  ],
};

export const CB008 = {
  ...sol_params,
  profitCurrencyImg: solana,
  depositCurrencyImg: solana,
  strategy: {
    name: "CB008",
    return: "4%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Inverse Derivatives",
    deposit_coin: "sol",
    profit_coin: "sol",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx],
  exchanges: ["Binance", "Bybit", "OKX"],
};

export const CB009 = {
  ...sol_params,
  profitCurrencyImg: usdt_usdc,
  depositCurrencyImg: solana,
  strategy: {
    name: "CB009",
    return: "4%+",
    direction: "LONG/SHORT",
    leverage: "1x to 1.5x",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "Linear Derivatives",
    deposit_coin: "sol",
    profit_coin: "usd",
    safety_net: "-40% to -50%",
    isAvailable: true,
  },
  wallets: [binance, bybit, okx, full_gate_io],
  exchanges: ["Binance", "Bybit", "OKX", "Gate.io"],
};

export const CB010 = {
  ...usd_params,
  profitCurrencyImg: usdt_usdc,
  depositCurrencyImg: usdt_usdc,
  strategy: {
    name: "CB010",
    return: "2%+",
    direction: "BULL",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT(BTC/INDEX)",
    deposit_coin: "usd",
    profit_coin: "usd",
    safety_net: "N/A",
    isAvailable: true,
  },
  wallets: [
    binance,
    bybit,
    kraken,
    okx,
    coinbase,
    binance_us,
    full_gate_io,
    gemini,
  ],
  exchanges: [
    "Binance",
    "Bybit",
    "Kraken",
    "OKX",
    "Coinbase",
    "Binance US",
    "Gate.io",
    "Gemini",
  ],
};

export const CB011 = {
  ...usd_params,
  profitCurrencyImg: usdt_usdc,
  depositCurrencyImg: usdt_usdc,
  strategy: {
    name: "CB011",
    return: "2%+",
    direction: "SHORT",
    leverage: "1x",
    minimum_deposit: "1 BTC in USD",
    maximum_deposit: "$4,000,000",
    market_type: "Linear D. (BTC/INDEX)",
    deposit_coin: "usd",
    profit_coin: "usd",
    safety_net: "100%",
    isAvailable: false,
  },
  wallets: [binance, bybit, bitget, okx, full_gate_io],
  exchanges: ["Binance", "Bybit", "bitget", "OKX", "Gate.io"],
};

export const SOLETH = {
  ...eth_params,
  profitCurrencyImg: ethereum,
  depositCurrencyImg: solana,
  strategy: {
    name: "SOLETH",
    return: "3%+",
    direction: "BULL",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT (SOL INDEX)",
    deposit_coin: "eth",
    profit_coin: "eth",
    safety_net: "N/A",
    isAvailable: true,
  },
  wallets: [binance, kraken, okx, coinbase, binance_us, gemini],
  exchanges: ["Binance", "Kraken", "OKX", "Coinbase", "Binance US", "Gemini"],
};
export const SOLBTC = {
  ...btc_params,
  profitCurrencyImg: bitcoin,
  depositCurrencyImg: solana,
  strategy: {
    name: "SOLBTC",
    return: "2%+",
    direction: "BULL",
    leverage: "N/A",
    minimum_deposit: "$10,000",
    maximum_deposit: "$4,000,000",
    market_type: "SPOT (SOL INDEX)",
    deposit_coin: "btc",
    profit_coin: "btc",
    safety_net: "N/A",
    isAvailable: true,
  },
  wallets: [binance, bybit, kraken, okx, coinbase, binance_us, gemini],
  exchanges: [
    "Binance",
    "Bybit",
    "Kraken",
    "OKX",
    "Coinbase",
    "Binance US",
    "Gemini",
  ],
};

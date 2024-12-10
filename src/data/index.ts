import binanceUs from "@/public/assets/icons/binance-us.svg";
import binance from "@/public/assets/icons/binance-vector-logo 1.svg";
import bitget from "@/public/assets/icons/bitget.svg";
import bybit from "@/public/assets/icons/bybit-seeklogo 1.svg";
import coinbase from "@/public/assets/icons/coinbase.svg";
import full_gate from "@/public/assets/icons/full-gate.io-logo 1.svg";
import gemini from "@/public/assets/icons/gemini.svg";
import kraken from "@/public/assets/icons/kraken-vector-logo 1.svg";
import kucoin from "@/public/assets/icons/Kucoin.svg";
import okex from "@/public/assets/icons/OKX_logo 1.svg";

import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";

export const exchanges = [
  "Binance.US",
  "Bybit",
  "Binance",
  "OKEX",
  "Gemini",
  "Bitget",
  "Kraken",
  "Gate.io",
];

export const coins = ["BTC", "ETH", " SOL", "USDT", "USDC"];

export const btc_params = {
  logo: [Bitcoin],
  denomination: "BTC",
};

export const eth_params = {
  logo: [Ethereum],
  denomination: "ETH",
};

export const sol_params = {
  logo: [Solana],

  denomination: "SOL",
};

export const usd_params = {
  logo: [Usdc, Usdt],
  denomination: "USD",
};

export const CB001 = {
  ...btc_params,
  bg: "",
  titleColor: "text-[#FB7800A6]",
  lightCircle: "",
  textLight: "",
  textDark: "text-[#FA7800]",
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
    okex,
    coinbase,
    binanceUs,
    full_gate,
    gemini,
  ],
  exchanges: [
    "binance",
    "bybit",
    "kraken",
    "okex",
    "coinbase",
    "binanceUs",
    "full_gate",
    "gemini",
  ],
};

export const CB002 = {
  ...btc_params,
  bg: "bg-[#F7A600]",
  titleColor: "text-[#FB7800A6]",
  lightCircle: "bg-[#FA7800]",
  textLight: "text-[#505155]",
  textDark: "text-[#FA7800]",
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
  wallets: [binance, bybit, okex, full_gate],
  exchanges: ["binance", "bybit", "okex", "full_gate"],
};

export const CB003 = {
  ...btc_params,
  bg: "bg-[#FCB900]",
  titleColor: "text-[#FB7800A6]",
  lightCircle: "bg-[#FA7800]",
  textLight: "text-[#505155]",
  textDark: "text-[#FA7800]",
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
  wallets: [binance, bybit, okex, full_gate],
  exchanges: ["binance", "bybit", "okex", "full_gate"],
};

export const CB004 = {
  ...eth_params,
  bg: "",
  titleColor: "text-[#468FDE]",
  lightCircle: "",
  textLight: "",
  textDark: "text-[#3D85C6]",
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
    okex,
    coinbase,
    binanceUs,
    full_gate,
    gemini,
  ],
  exchanges: [
    "binance",
    "bybit",
    "kraken",
    "okex",
    "coinbase",
    "binanceUs",
    "full_gate",
    "gemini",
  ],
};

export const CB005 = {
  ...eth_params,
  bg: "bg-[#2775CA]",
  titleColor: "text-[#468FDE]",
  lightCircle: "bg-[#468FDE]",
  textLight: "text-[#FFFFFFB2]",
  textDark: "text-[#3D85C6]",
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
  wallets: [binance, bybit, okex],
  exchanges: ["binance", "bybit", "okex"],
};

export const CB006 = {
  ...eth_params,
  bg: "bg-[#468FDE]",
  titleColor: "text-[#2775CA]",
  lightCircle: "bg-[#2775CA]",
  textLight: "text-[#FFFFFFB2]",
  textDark: "text-[#3D85C6]",
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
  wallets: [binance, bybit, okex, full_gate],
  exchanges: ["binance", "bybit", "okex", "full_gate"],
};

export const CB007 = {
  ...sol_params,
  bg: "",
  titleColor: "text-[#C69ACE]",
  lightCircle: "",
  textLight: "",
  textDark: "text-[#C69ACE]",
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
    okex,
    coinbase,
    binanceUs,
    full_gate,
    gemini,
  ],
  exchanges: [
    "binance",
    "bybit",
    "kraken",
    "okex",
    "coinbase",
    "binanceUs",
    "full_gate",
    "gemini",
  ],
};

export const CB008 = {
  ...sol_params,
  bg: "bg-[#9864E37F]",
  titleColor: "text-[#C69ACE]",
  lightCircle: "bg-[#2D2893]",
  textLight: "text-[#FFFFFFB2]",
  textDark: "text-[#C69ACE]",
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
  wallets: [binance, bybit, okex],
  exchanges: ["binance", "bybit", "okex"],
};

export const CB009 = {
  ...sol_params,
  bg: "bg-[#BD95F87F]",
  titleColor: "text-[#C69ACE]",
  lightCircle: "bg-[#2D2893]",
  textLight: "text-[#FFFFFFB2]",
  textDark: "text-[#C69ACE]",
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
  wallets: [binance, bybit, okex, full_gate],
  exchanges: ["binance", "bybit", "okex", "full_gate"],
};

export const CB010 = {
  ...usd_params,
  bg: "bg-[#02BE89]",
  titleColor: "text-[#64FFDA]",
  lightCircle: "bg-[#0C8462]",
  textLight: "text-[#292C3C]",
  textDark: "text-[#00FFA3]",
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
    okex,
    coinbase,
    binanceUs,
    full_gate,
    gemini,
  ],
  exchanges: [
    "binance",
    "bybit",
    "kraken",
    "okex",
    "coinbase",
    "binanceUs",
    "full_gate",
    "gemini",
  ],
};

export const CB011 = {
  ...usd_params,
  bg: "",
  titleColor: "text-[#64FFDA]",
  lightCircle: "",
  textLight: "",
  textDark: "text-[#00FFA3]",
  strategy: {
    name: "CB011",
    return: "2%+",
    direction: "SHORT",
    leverage: "1x",
    minimum_deposit: "1 BTC in USD",
    maximum_deposit: "$4,000,000",
    market_type: "Linear Derivatives (BTC/INDEX)",
    deposit_coin: "usd",
    profit_coin: "usd",
    safety_net: "100%",
    isAvailable: false,
  },
  wallets: [binance, bybit, bitget, okex, full_gate],
  exchanges: ["binance", "bybit", "bitget", "okex", "full_gate"],
};

export const SOLETH = {
  ...eth_params,
  direction: "BULL",
  leverage: "N/A",
  bg: "bg-gradient-to-tr from-[#5741D9] to-[#2775CA]",
  titleColor:
    "text-transparent bg-clip-text bg-gradient-to-r from-[#5C54B5] from-50% to-[#468FDE] to-50%",
  lightCircle: "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10",
  textLight: "text-[#D9D9D9]",
  textDark: "text-[#468FDE]",
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
  wallets: [binance, kraken, okex, coinbase, binanceUs, gemini],
  exchanges: ["binance", "kraken", "okex", "coinbase", "binanceUs", "gemini"],
};
export const SOLBTC = {
  ...btc_params,
  bg: "bg-gradient-to-tr from-[#7740AA] to-[#DFA01E]",
  titleColor:
    "text-transparent bg-clip-text bg-gradient-to-r from-[#C69ACE] from-50% to-[#FCB900] to-50%",
  lightCircle: "bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10",
  textLight: "text-[#D9D9D9]",
  textDark: "text-[#FCB900]",
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
  wallets: [binance, bybit, kraken, okex, coinbase, binanceUs, gemini],
  exchanges: [
    "binance",
    "bybit",
    "kraken",
    "okex",
    "coinbase",
    "binanceUs",
    "gemini",
  ],
};

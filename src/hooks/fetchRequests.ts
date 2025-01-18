import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import { UserData } from "@/src/types";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export type BotData = {
  _id: string;
  currentROI?: number;
  cummulativeROI?: number;
  strategy: string;
  status: "ACTIVE" | "INACTIVE";
  intent: "START" | "SOFT_STOP" | "HARD_STOP" | "RESUME" | "FULFILLED";
  profitCurrency: string;
  depositCurrency: string;
  exchange: string;
  apiKey: string;
  apiSecret: string;
  apiPassphrase: string;
  sinceActive: Date;
  sinceInactive: Date;
  lastSnapshot: Date;
  commaId: string;
  marginCall: boolean;
  manualProfit: number;
  fee: number;
  user: UserData | string;
  createdAt: Date;
  UpdatedAt: Date;
};

export type BotDeal = {
  from_currency_id: number;
  to_currency_id: number;
  id: number;
  type: string;
  bot_id: number;
  max_safety_orders: number;
  deal_has_error: boolean;
  account_id: number;
  active_safety_orders_count: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  "finished?": boolean;
  current_active_safety_orders_count: number;
  current_active_safety_orders: number;
  completed_safety_orders_count: number;
  completed_manual_safety_orders_count: number;
  cancellable?: boolean;
  panic_sellable?: boolean;
  trailing_enabled: boolean;
  tsl_enabled: boolean;
  stop_loss_timeout_enabled: boolean;
  stop_loss_timeout_in_seconds: number;
  active_manual_safety_orders: number;
  pair: string;
  status: string;
  localized_status?: string;
  take_profit: string;
  take_profit_steps: any[];
  base_order_volume: string;
  safety_order_volume: string;
  safety_order_step_percentage: string;
  leverage_type: string;
  leverage_custom_value: string | null;
  bought_amount: string;
  bought_volume: string;
  bought_average_price: string;
  base_order_average_price: string;
  sold_amount: string;
  sold_volume: string;
  sold_average_price: string;
  take_profit_type: string;
  final_profit: string;
  martingale_coefficient: string;
  martingale_volume_coefficient: string;
  martingale_step_coefficient: string;
  stop_loss_percentage: string;
  sl_to_breakeven_enabled: boolean;
  sl_to_breakeven_data: any | null;
  error_message: string | null;
  profit_currency: string;
  stop_loss_type: string;
  safety_order_volume_type: string;
  base_order_volume_type: string;
  from_currency: string;
  to_currency: string;
  final_profit_percentage: string;
  usd_final_profit: string;
  actual_profit: string;
  actual_usd_profit: string;
  failed_message: string | null;
  reserved_base_coin: string;
  reserved_second_coin: string;
  trailing_deviation: string;
  trailing_max_price: string | null;
  tsl_max_price: string | null;
  strategy: string;
  last_known_position_info: {
    pair: string;
    side: string;
    size: number;
    type: string;
    value: string;
    margin: string;
    profit: string;
    status: string;
    symbol: string;
    is_open: boolean;
    leverage: string;
    created_at: string;
    open_price: string;
    leverage_type: string;
    position_side: string;
    liquidation_price: string;
  } | null;
  min_profit_percentage: string;
  min_profit_type: any | null;
  close_strategy_list: any[];
  safety_strategy_list: any[];
  note: any | null;
  add_fundable: boolean;
  smart_trade_convertable: boolean;
  bot_name: string;
  account_name: string;
  market_type: string;
  current_price: string;
  take_profit_price: string;
  stop_loss_price: string | null;
  actual_profit_percentage: string;
  reserved_quote_funds: string;
  reserved_base_funds: string;
  orderbook_price_currency: string;
  crypto_widget: {
    progressAccuracy: number;
    TTPАctivated: boolean;
    buyPrice: string;
    currentPrice: string;
    inverted: boolean;
    stopLosses: any | null;
    LP: any | null;
    buySteps: { price: string; filled: string }[];
    marks: { type: string; label: string; price: string; position: string }[];
  };
  bot_events?: {
    message: string;
    created_at: string;
  }[];
};

export type BotDealOrder = {
  order_id: string;
  order_type: "BUY" | "SELL";
  deal_order_type: "Base" | "Safety" | "Take Profit" | string;
  cancellable: boolean;
  status_string: "Filled" | "Active" | "Untriggered" | string;
  created_at: Date;
  updated_at: Date;
  quantity: string;
  quantity_remaining: string;
  total: string;
  rate: string;
  average_price: string;
  bot_events?: {
    message: string;
    created_at: string;
  }[];
};

interface NotificationsData {
  _id: string;
  bot: BotData;
  message: string;
  read: boolean;
  user: UserData;
  createdAt: Date;
  UpdatedAt: Date;
}

export interface InvoicesData {
  _id: string;
  bot: BotData;
  user: UserData;
  status: "PAID" | "UNPAID";
  amount: number;
  currency: string;
  from: Date;
  to: Date;
  sincePaid: Date;
  checkout: {
    invoice_url?: string;
    checkoutLink?: string;
  };
  createdAt: Date;
  UpdatedAt: Date;
}

export interface RewardData {
  _id: string;
  strategy: string;
  user: string;
  amount: number;
  currency: string;
  createdAt: Date;
}

interface RewardsResponse {
  rewards: RewardData[];
  sol_balance: number;
  eth_balance: number;
  btc_balance: number;
  usd_balance: number;
}

interface StrategyData {
  strategy_id: string;
  month: string;
  year: number;
  strategy_direction: string;
  deals_completed: number;
  performance: string;
  maximum_days_in_a_deal: number;
  average_days_in_a_deal: number;
  max_price_deviation: string;
  trading_view_link: string;
}

const token = getCookie("auth_token");

export const useFetchUser = () => {
  const axios = useAxiosInstance();

  const fetchUser = async () => {
    const { data } = await axios.get("/fetch-user");

    return data.user as UserData;
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retryOnMount: true,
    refetchOnMount: true,
    enabled: !!token,
  });
};

export const useFetchNotifications = () => {
  const axios = useAxiosInstance();

  const fetchNotifications = async () => {
    const { data } = await axios.get("/fetch-notifications");

    return { notifications: data.notifications, unread: data.unread } as {
      notifications: NotificationsData[];
      unread: number;
    };
  };

  return useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    refetchInterval: 180000,
    enabled: !!token,
  });
};

export const useFetchHistogramData = () => {
  // use mutation function to fetch the data since it will be called by a button click
  const axios = useAxiosInstance();

  const fetchHistogramData = async (id: string) => {
    const { data } = await axios.get(`/fetch-histogram-data?_id=${id}`);

    return data;
  };

  return useMutation({
    mutationKey: ["histogram-data"],
    mutationFn: fetchHistogramData,
  });
};

export const useFetchStrategy = () => {
  const axios = useAxiosInstance();

  const fetchStrategy = async ({
    strategy,
    year,
    month,
  }: {
    strategy: string;
    year: string;
    month: string;
  }) => {
    const { data } = await axios.get(
      `/fetch-strategy?strategy=${strategy}&year=${year}&month=${month}`
    );

    return data.strategy as StrategyData;
  };

  return useMutation({
    mutationKey: ["strategy"],
    mutationFn: fetchStrategy,
  });
};

export const useCheckRunningBot = () => {
  const axios = useAxiosInstance();

  const checkRunningBot = async (botData: {
    user_id: string;
    strategy_id: string;
    exchange: string;
  }) => {
    if (!token) return;
    const { data } = await axios.post("/running-bot", {
      ...botData,
    });

    return data.runningBot as BotData;
  };

  return useMutation({
    mutationKey: ["check-running-bot"],
    mutationFn: checkRunningBot,
  });
};

export const useFetchInvoices = (user_id: string) => {
  const axios = useAxiosInstance();

  const fetchInvoices = async () => {
    const { data } = await axios.get(`/fetch-invoices?_id=${user_id}`);

    return data.invoices as InvoicesData[];
  };

  return useQuery({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
    enabled: !!user_id,
  });
};

export const useFetchRewards = () => {
  const axios = useAxiosInstance();

  const fetchRewards = async () => {
    const { data } = await axios.get("/fetch-rewards");

    return data as RewardsResponse;
  };

  return useQuery({
    queryKey: ["rewards"],
    queryFn: fetchRewards,
  });
};

export const useFetchBots = (userId: string) => {
  const axios = useAxiosInstance();

  const fetchBots = async () => {
    const { data } = await axios.get(`/fetch-bots?userId=${userId}`);

    return data.bots as BotData[];
  };

  return useQuery({
    queryKey: ["bots"],
    queryFn: fetchBots,
    enabled: !!userId,
    refetchOnMount: true,
  });
};

export const useFetchBotStat = (id: string) => {
  const axios = useAxiosInstance();

  const fetchBotStat = async () => {
    const { data } = await axios.get(`/fetch-bot-stats?_id=${id}`);

    return data.stats;
  };

  return useQuery({
    queryKey: ["bot-stat"],
    queryFn: fetchBotStat,
    refetchOnMount: true,
  });
};

export const useFetchBotProfits = (id: string) => {
  const axios = useAxiosInstance();

  const fetchBotProfits = async () => {
    const { data } = await axios.get(`/fetch-bot-profits?_id=${id}`);

    return data.profits;
  };

  return useQuery({
    queryKey: ["bot-profits"],
    queryFn: fetchBotProfits,
    refetchOnMount: true,
  });
};

export const useFetchBotDeals = (id: string) => {
  const axios = useAxiosInstance();

  const fetchBotDeals = async () => {
    const { data } = await axios.get(`/fetch-bot-deals?_id=${id}`);

    return {
      deals: data.deals as BotDeal[],
      latestDeal: data.latestDeal as BotDeal,
      latestDealOrders: data.latestDealOrders as BotDealOrder[],
    };
  };

  return useQuery({
    queryKey: ["bot-deals"],
    queryFn: fetchBotDeals,
    // refetchOnMount: true,
    enabled: !!id,
    // retryOnMount: true,
  });
};

export const useFetchIp = () => {
  const axios = useAxiosInstance();

  const fetchIp = async () => {
    const { data } = await axios.get("/fetch-ip");

    return data;
  };

  return useQuery({
    queryKey: ["ip"],
    queryFn: fetchIp,
  });
};

export const useFetchReferral = () => {
  const axios = useAxiosInstance();

  const fetchReferral = async () => {
    const { data } = await axios.get("/fetch-referral");

    return data;
  };

  return useQuery({
    queryKey: ["referral"],
    queryFn: fetchReferral,
    refetchOnMount: true,
  });
};

export const useFetchTransactions = () => {
  const axios = useAxiosInstance();

  const fetchTransactions = async () => {
    const { data } = await axios.get("/fetch-transactions");

    return data;
  };

  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
};

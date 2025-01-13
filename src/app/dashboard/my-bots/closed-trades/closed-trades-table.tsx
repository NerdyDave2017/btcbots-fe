import React from "react";
import BasicTable from "../../components/table";
import useTableGlobal from "@/src/hooks/useTableGlobal";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import { formatDate, calculateTimeDuration } from "@/src/lib";

const coins = [
  { name: "BTC", value: Bitcoin },
  { name: "ETH", value: Ethereum },
  { name: "SOL", value: Solana },
  { name: "USDC", value: Usdc },
  { name: "USDT", value: Usdt },
  { name: "USD", value: Usdc, value2: Usdt },
];

const columns = [
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium">
        <span className="">Pair</span>
      </div>
    ),
    accessorKey: "pair",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="px-8 py-4 text-sm">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                alt=""
                className="w-6"
                src={
                  coins.filter((e) => e.name === item.from_currency)[0]?.value
                }
              />
              <Image
                alt=""
                className="w-6"
                src={
                  coins.filter((e) => e.name === item.from_currency)[0]?.value2
                }
              />
            </div>

            <span>{item.pair}</span>
          </div>
          <span className="mt-1">{item.bot_name}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium">
        <span className="">Profit (%)</span>
      </div>
    ),
    accessorKey: "profit",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span
          // className={`border-b-[0.5px] border-[#ffffff] border-opacity-20 ${
          //   item.actual_profit > 0 ? "text-green-400" : "text-rose-500"
          // }`}
          >
            {item.actual_profit > 0 && "+"}
            <span>
              {item.actual_profit} {item.from_currency}
            </span>
          </span>
          <span
          // className={`${
          //   item.actual_usd_profit > 0 ? "text-green-400" : "text-rose-500"
          // }`}
          >
            {item.actual_usd_profit > 0 && "+"}
            {Number(item.actual_usd_profit).toFixed(2)} USD
          </span>
          <span
          // className={`${
          //   item.actual_profit > 0 ? "text-green-400" : "text-rose-500"
          // }`}
          >
            {item.actual_profit_percentage > 0 && "+"}
            {item.final_profit_percentage !== "0"
              ? item.final_profit_percentage
              : item.actual_profit_percentage}
            %
          </span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium">
        <span className="">Volume</span>
      </div>
    ),
    accessorKey: "volume",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span>
            {item.bought_amount} {item.to_currency}
          </span>
          <span>
            {item.bought_volume} {item.from_currency}
          </span>
          {/* <span>+1.32%</span> */}
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium">
        <span className="">Status</span>
      </div>
    ),
    accessorKey: "status",
    cell: (prop: any) => {
      const item = prop.row.original;
      return <div className="px-8 py-4 text-sm">{item.status}</div>;
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium text-sm">
        <span className="">SO</span>
      </div>
    ),
    accessorKey: "so",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="px-8 py-4 text-sm">
          Filled: {item.completed_safety_orders_count}
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4 font-medium">
        <span className="">Closed on</span>
      </div>
    ),
    accessorKey: "closedOn",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span>ID: {item.id}</span>
          <span>Start: {formatDate(item.created_at, "MMM DD, YYYY")}</span>
          <span>
            End:{" "}
            {item.closed_at ? formatDate(item.closed_at, "MMM DD, YYYY") : "-"}
          </span>
          <span>
            Duration:{" "}
            {item.closed_at
              ? `${
                  calculateTimeDuration(item.created_at, item.closed_at).hours
                }hrs ${
                  calculateTimeDuration(item.created_at, item.closed_at).minutes
                } mins`
              : ""}
          </span>
        </div>
      );
    },
  },
];

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
const data: BotDeal[] = [
  {
    from_currency_id: 1,
    to_currency_id: 2,
    id: 1,
    type: "type1",
    bot_id: 101,
    max_safety_orders: 5,
    deal_has_error: false,
    account_id: 201,
    active_safety_orders_count: 2,
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-02T00:00:00Z",
    closed_at: "2023-01-03T00:00:00Z",
    "finished?": true,
    current_active_safety_orders_count: 1,
    current_active_safety_orders: 1,
    completed_safety_orders_count: 3,
    completed_manual_safety_orders_count: 1,
    cancellable: true,
    panic_sellable: true,
    trailing_enabled: true,
    tsl_enabled: true,
    stop_loss_timeout_enabled: true,
    stop_loss_timeout_in_seconds: 60,
    active_manual_safety_orders: 1,
    pair: "BTC/USD",
    status: "closed",
    take_profit: "10%",
    take_profit_steps: [],
    base_order_volume: "1000",
    safety_order_volume: "500",
    safety_order_step_percentage: "1.5",
    leverage_type: "cross",
    leverage_custom_value: "10",
    bought_amount: "0.1",
    bought_volume: "1000",
    bought_average_price: "10000",
    base_order_average_price: "10000",
    sold_amount: "0.1",
    sold_volume: "1100",
    sold_average_price: "11000",
    take_profit_type: "percentage",
    final_profit: "100",
    martingale_coefficient: "1.05",
    martingale_volume_coefficient: "1.1",
    martingale_step_coefficient: "1.2",
    stop_loss_percentage: "5",
    sl_to_breakeven_enabled: true,
    sl_to_breakeven_data: null,
    error_message: null,
    profit_currency: "USD",
    stop_loss_type: "percentage",
    safety_order_volume_type: "fixed",
    base_order_volume_type: "fixed",
    from_currency: "BTC",
    to_currency: "USD",
    final_profit_percentage: "10",
    usd_final_profit: "100",
    actual_profit: "100",
    actual_usd_profit: "100",
    failed_message: null,
    reserved_base_coin: "0.1",
    reserved_second_coin: "1000",
    trailing_deviation: "0.5",
    trailing_max_price: null,
    tsl_max_price: null,
    strategy: "long",
    last_known_position_info: null,
    min_profit_percentage: "1",
    min_profit_type: null,
    close_strategy_list: [],
    safety_strategy_list: [],
    note: null,
    add_fundable: true,
    smart_trade_convertable: true,
    bot_name: "Bot 1",
    account_name: "Account 1",
    market_type: "spot",
    current_price: "11000",
    take_profit_price: "12000",
    stop_loss_price: "9500",
    actual_profit_percentage: "10",
    reserved_quote_funds: "1000",
    reserved_base_funds: "0.1",
    orderbook_price_currency: "USD",
    crypto_widget: {
      progressAccuracy: 95,
      TTPАctivated: true,
      buyPrice: "10000",
      currentPrice: "11000",
      inverted: false,
      stopLosses: null,
      LP: null,
      buySteps: [{ price: "10000", filled: "0.1" }],
      marks: [
        { type: "take_profit", label: "TP", price: "12000", position: "top" },
      ],
    },
    bot_events: [
      { message: "Deal closed", created_at: "2023-01-03T00:00:00Z" },
    ],
  },
  {
    from_currency_id: 2,
    to_currency_id: 3,
    id: 2,
    type: "type2",
    bot_id: 102,
    max_safety_orders: 3,
    deal_has_error: false,
    account_id: 202,
    active_safety_orders_count: 1,
    created_at: "2023-02-01T00:00:00Z",
    updated_at: "2023-02-02T00:00:00Z",
    closed_at: "2023-02-03T00:00:00Z",
    "finished?": true,
    current_active_safety_orders_count: 1,
    current_active_safety_orders: 1,
    completed_safety_orders_count: 2,
    completed_manual_safety_orders_count: 1,
    cancellable: true,
    panic_sellable: true,
    trailing_enabled: true,
    tsl_enabled: true,
    stop_loss_timeout_enabled: true,
    stop_loss_timeout_in_seconds: 60,
    active_manual_safety_orders: 1,
    pair: "ETH/USD",
    status: "closed",
    take_profit: "8%",
    take_profit_steps: [],
    base_order_volume: "2000",
    safety_order_volume: "1000",
    safety_order_step_percentage: "1.5",
    leverage_type: "cross",
    leverage_custom_value: "5",
    bought_amount: "0.2",
    bought_volume: "2000",
    bought_average_price: "10000",
    base_order_average_price: "10000",
    sold_amount: "0.2",
    sold_volume: "2200",
    sold_average_price: "11000",
    take_profit_type: "percentage",
    final_profit: "200",
    martingale_coefficient: "1.05",
    martingale_volume_coefficient: "1.1",
    martingale_step_coefficient: "1.2",
    stop_loss_percentage: "5",
    sl_to_breakeven_enabled: true,
    sl_to_breakeven_data: null,
    error_message: null,
    profit_currency: "USD",
    stop_loss_type: "percentage",
    safety_order_volume_type: "fixed",
    base_order_volume_type: "fixed",
    from_currency: "ETH",
    to_currency: "USD",
    final_profit_percentage: "10",
    usd_final_profit: "200",
    actual_profit: "200",
    actual_usd_profit: "200",
    failed_message: null,
    reserved_base_coin: "0.2",
    reserved_second_coin: "2000",
    trailing_deviation: "0.5",
    trailing_max_price: null,
    tsl_max_price: null,
    strategy: "long",
    last_known_position_info: null,
    min_profit_percentage: "1",
    min_profit_type: null,
    close_strategy_list: [],
    safety_strategy_list: [],
    note: null,
    add_fundable: true,
    smart_trade_convertable: true,
    bot_name: "Bot 2",
    account_name: "Account 2",
    market_type: "spot",
    current_price: "11000",
    take_profit_price: "12000",
    stop_loss_price: "9500",
    actual_profit_percentage: "10",
    reserved_quote_funds: "2000",
    reserved_base_funds: "0.2",
    orderbook_price_currency: "USD",
    crypto_widget: {
      progressAccuracy: 95,
      TTPАctivated: true,
      buyPrice: "10000",
      currentPrice: "11000",
      inverted: false,
      stopLosses: null,
      LP: null,
      buySteps: [{ price: "10000", filled: "0.2" }],
      marks: [
        { type: "take_profit", label: "TP", price: "12000", position: "top" },
      ],
    },
    bot_events: [
      { message: "Deal closed", created_at: "2023-02-03T00:00:00Z" },
    ],
  },
  {
    from_currency_id: 3,
    to_currency_id: 4,
    id: 3,
    type: "type3",
    bot_id: 103,
    max_safety_orders: 4,
    deal_has_error: false,
    account_id: 203,
    active_safety_orders_count: 2,
    created_at: "2023-03-01T00:00:00Z",
    updated_at: "2023-03-02T00:00:00Z",
    closed_at: "2023-03-03T00:00:00Z",
    "finished?": true,
    current_active_safety_orders_count: 1,
    current_active_safety_orders: 1,
    completed_safety_orders_count: 3,
    completed_manual_safety_orders_count: 1,
    cancellable: true,
    panic_sellable: true,
    trailing_enabled: true,
    tsl_enabled: true,
    stop_loss_timeout_enabled: true,
    stop_loss_timeout_in_seconds: 60,
    active_manual_safety_orders: 1,
    pair: "SOL/USD",
    status: "closed",
    take_profit: "12%",
    take_profit_steps: [],
    base_order_volume: "3000",
    safety_order_volume: "1500",
    safety_order_step_percentage: "1.5",
    leverage_type: "cross",
    leverage_custom_value: "15",
    bought_amount: "0.3",
    bought_volume: "3000",
    bought_average_price: "10000",
    base_order_average_price: "10000",
    sold_amount: "0.3",
    sold_volume: "3300",
    sold_average_price: "11000",
    take_profit_type: "percentage",
    final_profit: "300",
    martingale_coefficient: "1.05",
    martingale_volume_coefficient: "1.1",
    martingale_step_coefficient: "1.2",
    stop_loss_percentage: "5",
    sl_to_breakeven_enabled: true,
    sl_to_breakeven_data: null,
    error_message: null,
    profit_currency: "USD",
    stop_loss_type: "percentage",
    safety_order_volume_type: "fixed",
    base_order_volume_type: "fixed",
    from_currency: "SOL",
    to_currency: "USD",
    final_profit_percentage: "10",
    usd_final_profit: "300",
    actual_profit: "300",
    actual_usd_profit: "300",
    failed_message: null,
    reserved_base_coin: "0.3",
    reserved_second_coin: "3000",
    trailing_deviation: "0.5",
    trailing_max_price: null,
    tsl_max_price: null,
    strategy: "long",
    last_known_position_info: null,
    min_profit_percentage: "1",
    min_profit_type: null,
    close_strategy_list: [],
    safety_strategy_list: [],
    note: null,
    add_fundable: true,
    smart_trade_convertable: true,
    bot_name: "Bot 3",
    account_name: "Account 3",
    market_type: "spot",
    current_price: "11000",
    take_profit_price: "12000",
    stop_loss_price: "9500",
    actual_profit_percentage: "10",
    reserved_quote_funds: "3000",
    reserved_base_funds: "0.3",
    orderbook_price_currency: "USD",
    crypto_widget: {
      progressAccuracy: 95,
      TTPАctivated: true,
      buyPrice: "10000",
      currentPrice: "11000",
      inverted: false,
      stopLosses: null,
      LP: null,
      buySteps: [{ price: "10000", filled: "0.3" }],
      marks: [
        { type: "take_profit", label: "TP", price: "12000", position: "top" },
      ],
    },
    bot_events: [
      { message: "Deal closed", created_at: "2023-03-03T00:00:00Z" },
    ],
  },
];

type Props = {
  data: BotDeal[];
};

const ClosedTradesTable = ({ data }: Props) => {
  const { table, filterFunctions, filterValues, sortingFunctions } =
    useTableGlobal(data as any, columns);

  return <BasicTable table={table} />;
};

export default ClosedTradesTable;

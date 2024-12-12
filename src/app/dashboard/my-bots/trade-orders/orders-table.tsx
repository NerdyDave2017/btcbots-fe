import React from "react";
import BasicTable from "../../components/table";
import useTableGlobal from "@/src/hooks/useTableGlobal";
import { FilterIcon } from "@/public/assets/icons";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import { formatDate } from "@/src/lib";

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
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="">Side</span>
      </div>
    ),
    accessorKey: "side",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="px-8 py-4">
          <span
            className={`p-1 rounded-sm ${
              item.order_type === "SELL" ? "bg-rose-400" : "bg-green-400"
            } text-center text-xs`}
          >
            {item.order_type}
          </span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Order Type</span>
      </div>
    ),
    accessorKey: "orderType",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4">
          <span className="">{item.deal_order_type}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Status</span>
      </div>
    ),
    accessorKey: "status",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4">
          <span className="flex">{item.status_string}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Rate</span>
      </div>
    ),
    accessorKey: "rate",
    cell: (prop: any) => {
      const item = prop.row.original;
      return <span className="flex">{item.rate}</span>;
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Amount</span>
      </div>
    ),
    accessorKey: "amount",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <span className="flex">
          {item.quantity_remaining}/{item.quantity}{" "}
        </span>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Volume</span>
      </div>
    ),
    accessorKey: "volume",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4">
          <span className="flex">{item.total}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Created</span>
      </div>
    ),
    accessorKey: "Created",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4">
          <span className="">
            {formatDate(item.created_at, "MMM DD, YYYY")}
          </span>
          <span className="">{formatDate(item.created_at, "hh:mm A")}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-semibold">Updated</span>
      </div>
    ),
    accessorKey: "Updated",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4">
          <span className="">
            {formatDate(item.updated_at, "MMM DD, YYYY")}
          </span>
          <span className="">{formatDate(item.updated_at, "hh:mm A")}</span>
        </div>
      );
    },
  },
];

const OrdersTable = () => {
  return <div>OrdersTable</div>;
};

export default OrdersTable;

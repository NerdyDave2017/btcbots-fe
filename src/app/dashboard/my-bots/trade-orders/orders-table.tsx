import React from "react";
import BasicTable from "../../components/table";
import useTableGlobal from "@/src/hooks/useTableGlobal";
import { formatDate } from "@/src/lib";

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
};

const data: BotDealOrder[] = [
  {
    order_id: "1",
    order_type: "BUY",
    deal_order_type: "Base",
    cancellable: true,
    status_string: "Filled",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "0.5",
    quantity_remaining: "0.2",
    total: "10000",
    rate: "20000",
    average_price: "19000",
  },
  {
    order_id: "2",
    order_type: "SELL",
    deal_order_type: "Safety",
    cancellable: false,
    status_string: "Active",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "1.0",
    quantity_remaining: "0.5",
    total: "50000",
    rate: "50000",
    average_price: "48000",
  },
  {
    order_id: "3",
    order_type: "BUY",
    deal_order_type: "Take Profit",
    cancellable: true,
    status_string: "Untriggered",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "0.3",
    quantity_remaining: "0.1",
    total: "6000",
    rate: "20000",
    average_price: "19500",
  },
  {
    order_id: "4",
    order_type: "SELL",
    deal_order_type: "Base",
    cancellable: false,
    status_string: "Filled",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "2.0",
    quantity_remaining: "1.0",
    total: "100000",
    rate: "50000",
    average_price: "49000",
  },
  {
    order_id: "5",
    order_type: "BUY",
    deal_order_type: "Safety",
    cancellable: true,
    status_string: "Active",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "0.7",
    quantity_remaining: "0.3",
    total: "14000",
    rate: "20000",
    average_price: "19800",
  },
  {
    order_id: "6",
    order_type: "SELL",
    deal_order_type: "Take Profit",
    cancellable: false,
    status_string: "Untriggered",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "1.5",
    quantity_remaining: "0.5",
    total: "75000",
    rate: "50000",
    average_price: "49500",
  },
  {
    order_id: "7",
    order_type: "BUY",
    deal_order_type: "Base",
    cancellable: true,
    status_string: "Filled",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "0.4",
    quantity_remaining: "0.1",
    total: "8000",
    rate: "20000",
    average_price: "19750",
  },
  {
    order_id: "8",
    order_type: "SELL",
    deal_order_type: "Safety",
    cancellable: false,
    status_string: "Active",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "2.5",
    quantity_remaining: "1.0",
    total: "125000",
    rate: "50000",
    average_price: "49200",
  },
  {
    order_id: "9",
    order_type: "BUY",
    deal_order_type: "Take Profit",
    cancellable: true,
    status_string: "Untriggered",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "0.6",
    quantity_remaining: "0.2",
    total: "12000",
    rate: "20000",
    average_price: "19600",
  },
  {
    order_id: "10",
    order_type: "SELL",
    deal_order_type: "Base",
    cancellable: false,
    status_string: "Filled",
    created_at: new Date(),
    updated_at: new Date(),
    quantity: "3.0",
    quantity_remaining: "1.5",
    total: "150000",
    rate: "50000",
    average_price: "49300",
  },
];

const columns = [
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Side</span>
      </div>
    ),
    accessorKey: "side",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span
          // className={`p-1 rounded-sm ${
          //   item.order_type === "SELL" ? "bg-rose-400" : "bg-green-400"
          // } text-center text-xs`}
          >
            {item.order_type.charAt(0) + item.order_type.slice(1).toLowerCase()}
          </span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Order Type</span>
      </div>
    ),
    accessorKey: "orderType",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{item.deal_order_type}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Status</span>
      </div>
    ),
    accessorKey: "status",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{item.status_string}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Rate</span>
      </div>
    ),
    accessorKey: "rate",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{item.rate}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Amount</span>
      </div>
    ),
    accessorKey: "amount",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">
            {item.quantity_remaining}/{item.quantity}{" "}
          </span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Volume</span>
      </div>
    ),
    accessorKey: "volume",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{item.total}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Created</span>
      </div>
    ),
    accessorKey: "Created",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
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
        <span className="font-medium">Updated</span>
      </div>
    ),
    accessorKey: "Updated",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
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
  // Get all column finter values and functions from global table instance
  const { table, filterFunctions, filterValues, sortingFunctions } =
    useTableGlobal(data as any, columns);

  return <BasicTable table={table} />;
};

export default OrdersTable;

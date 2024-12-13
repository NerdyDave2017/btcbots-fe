import React from "react";
import BasicTable from "../components/table";
import useTableGlobal from "@/src/hooks/useTableGlobal";
import { formatDate } from "@/src/lib";

type ProfitShareType = {
  strategy: "CB001" | "CB002" | "CB003";
  start: string;
  end: string;
  totalProfit: string;
  currency: "BTC" | "ETH" | "USDT";
  rate: string; // 33%
};

const data: ProfitShareType[] = [
  {
    strategy: "CB001",
    start: "2023-01-01",
    end: "2023-01-31",
    totalProfit: "0.5",
    currency: "BTC",
    rate: "33%",
  },
  {
    strategy: "CB002",
    start: "2023-02-01",
    end: "2023-02-28",
    totalProfit: "1.2",
    currency: "ETH",
    rate: "25%",
  },
  {
    strategy: "CB003",
    start: "2023-03-01",
    end: "2023-03-31",
    totalProfit: "0.8",
    currency: "USDT",
    rate: "20%",
  },
  {
    strategy: "CB001",
    start: "2023-04-01",
    end: "2023-04-30",
    totalProfit: "0.3",
    currency: "BTC",
    rate: "30%",
  },
  {
    strategy: "CB002",
    start: "2023-05-01",
    end: "2023-05-31",
    totalProfit: "1.0",
    currency: "ETH",
    rate: "28%",
  },
];

const columns = [
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Strategy</span>
      </div>
    ),
    accessorKey: "strategy",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span>{item.strategy}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Period</span>
      </div>
    ),
    accessorKey: "period",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">
            {item.start} - {item.end}
          </span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Total Profit (Unit of account)</span>
      </div>
    ),
    accessorKey: "totalProfit",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">
            {item.totalProfit} {item.currency}
          </span>
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
        <span className="font-medium">Profit Share</span>
      </div>
    ),
    accessorKey: "amount",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <div className="px-4 py-2 rounded-[90px] border border-primary justify-center items-center gap-2.5 inline-flex cursor-pointer">
            <div className="text-primary text-sm font-normal">
              Proceed to pay
            </div>
          </div>
        </div>
      );
    },
  },
];

const ProfitShareTable = () => {
  // Get all column finter values and functions from global table instance
  const { table, filterFunctions, filterValues, sortingFunctions } =
    useTableGlobal(data as any, columns);

  return <BasicTable table={table} />;
};

export default ProfitShareTable;

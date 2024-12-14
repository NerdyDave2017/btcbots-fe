import React from "react";
import BasicTable from "../../components/table";
import useTableGlobal from "@/src/hooks/useTableGlobal";
import { formatDate } from "@/src/lib";

type AffiliateShareType = {
  email: string;
  reward: string;
  currency: string;
  date: string;
};

const data: AffiliateShareType[] = [
  {
    email: "user1@example.com",
    reward: "100",
    currency: "USD",
    date: "2023-10-01",
  },
  {
    email: "user2@example.com",
    reward: "150",
    currency: "USD",
    date: "2023-10-02",
  },
  {
    email: "user3@example.com",
    reward: "200",
    currency: "USD",
    date: "2023-10-03",
  },
];

const columns = [
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Email</span>
      </div>
    ),
    accessorKey: "email",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span>{item.email}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Reward</span>
      </div>
    ),
    accessorKey: "reward",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{item.reward}</span>
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="flex gap-1 items-center text-left px-8 py-4">
        <span className="font-medium">Date</span>
      </div>
    ),
    accessorKey: "date",
    cell: (prop: any) => {
      const item = prop.row.original;
      return (
        <div className="flex flex-col px-8 py-4 text-sm">
          <span className="">{formatDate(item.date, "MMM DD, YYYY")}</span>
        </div>
      );
    },
  },
];

const AffiliateCenterTable = () => {
  // Get all column finter values and functions from global table instance
  const { table, filterFunctions, filterValues, sortingFunctions } =
    useTableGlobal(data as any, columns);

  return <BasicTable table={table} />;
};

export default AffiliateCenterTable;

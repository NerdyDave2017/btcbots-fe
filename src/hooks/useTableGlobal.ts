import {
  SortingState,
  ColumnFiltersState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";

const useTableGlobal = (data: any[], columns: ColumnDef<any, any>[]) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  // console.log(data);
  // console.log(columns);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
    onSortingChange: setSorting,
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  const columnFilterValues: any[] = [];
  const columnFilterFunctions: any[] = [];
  const columnSortingFunctions: any[] = [];

  // Extract the column filter values and functions for each column
  table.getHeaderGroups().map((headerGroup: any) => {
    headerGroup.headers.map((header: any) => {
      columnFilterValues.push(header.column.getFilterValue());
      columnFilterFunctions.push(header.column.setFilterValue);
      const sortingFunctions = {
        toggleSorting: header.column.toggleSorting,
        clearSorting: header.column.clearSorting,
        getToggleSortingHandler: header.column.getToggleSortingHandler(),
      };
      columnSortingFunctions.push(sortingFunctions);
    });
  });

  return {
    table,
    filterValues: columnFilterValues,
    filterFunctions: columnFilterFunctions,
    sortingFunctions: columnSortingFunctions,
  };
};

export default useTableGlobal;

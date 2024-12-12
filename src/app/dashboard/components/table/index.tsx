import { flexRender, Table } from "@tanstack/react-table";
import PaginationControl from "./pagination";

export default function BasicTable({
  table,
  noRouting = false,
}: {
  table: Table<any>;
  noRouting?: boolean;
}) {
  return (
    <div className="w-[100%]">
      <table className="h-[100%] w-[100%]">
        <thead className="w-[100%]">
          {table.getHeaderGroups().map((headerGroup: any) => (
            <tr
              key={headerGroup.id}
              className="border-b-[0.5px] border-[#ffffff] border-opacity-20 whitespace-nowrap"
            >
              {headerGroup.headers.map((header: any) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()} // Remove sorting on header click
                  className=""
                >
                  {header.isPlaceholder ? null : (
                    <div
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? "Sort ascending"
                            : header.column.getNextSortingOrder() === "desc"
                            ? "Sort descending"
                            : "Clear sort"
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="w-[100%]">
          {table.getRowModel().rows.map((row: any) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id} className="">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {table.getPageCount() >= 1 && <PaginationControl table={table} />}
    </div>
  );
}

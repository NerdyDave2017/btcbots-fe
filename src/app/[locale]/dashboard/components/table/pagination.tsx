import { useState, useEffect } from "react";
import { Table } from "@tanstack/react-table";
import { ArrowRight } from "@/public/assets/icons";
import { range } from "../../../../../lib/index";

type Props = {
  table: Table<any>;
};

const PaginationControl = ({ table }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visible, setVisible] = useState({
    visibleStart: 1,
    visibleEnd: 5,
  });

  // Function to render visible page tile
  const showVisiblePages = () => {
    const tiles = range(visible.visibleEnd, visible.visibleStart);

    return tiles;
  };

  useEffect(() => {
    if (table) {
      const totalNoOfPages = table.getPageCount();
      const currentPage = table.getState().pagination.pageIndex + 1;

      // Function to check if pages left are 2 or less
      if (currentPage >= totalNoOfPages - 2) {
        //Render last 3 pages only
        setVisible({
          ...visible,
          visibleStart: totalNoOfPages - 2 < 1 ? 1 : totalNoOfPages - 2,
          visibleEnd: totalNoOfPages,
        });
      } else {
        setVisible({
          ...visible,
          visibleStart: currentPage,
          visibleEnd: currentPage + 2,
        });
      }

      setCurrentPage(table.getState().pagination.pageIndex + 1);
    }
  }, [
    table,
    table.getState().pagination.pageIndex,
    table.getState().pagination.pageSize,
  ]);

  return (
    <div className="w-full my-5 px-8 h-10 flex text-sm justify-between items-center gap-5 text-main">
      <div className="text-nowrap">
        Showing 1 to {table.getRowModel().rows.length.toLocaleString()} of{" "}
        {table.getRowCount().toLocaleString()} models
      </div>

      <div className="flex items-center gap-5 ">
        <div className="">
          <select
            className="bg-transparent cursor-pointer outline-none"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex gap-5 text-main">
          <button
            className="flex items-center justify-center rounded-md   text-main cursor-pointer gap-2"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowRight className="transform rotate-180 " />
            <span>Previous</span>
          </button>

          <div className="flex gap-1">
            {showVisiblePages().map(
              (tile, index) =>
                // Check if total no of pages is greater than one before render
                table.getPageCount() > 1 && (
                  <div
                    key={index}
                    className={`w-7 h-7 flex items-center justify-center ${
                      currentPage === tile ? "bg-main text-white" : ""
                    }  rounded-md    cursor-pointer`}
                    onClick={() => table.setPageIndex(tile - 1)}
                  >
                    {tile}
                  </div>
                )
            )}
            {/* Check if number of pages left is 2 or less */}
            {!(currentPage + 2 >= table.getPageCount()) && (
              <div
                className={`h-full  flex rounded-md text-main cursor-pointer`}
              >
                ...
              </div>
            )}
            <div
              className={`w-7 h-7 flex items-center justify-center ${
                table.getState().pagination.pageIndex + 1 ===
                table.getPageCount()
                  ? "bg-main text-white"
                  : ""
              } rounded-md    cursor-pointer`}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              {table.getPageCount()}
            </div>
          </div>

          <button
            className="flex items-center gap-2 justify-center rounded-md   text-main"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="">Next</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControl;

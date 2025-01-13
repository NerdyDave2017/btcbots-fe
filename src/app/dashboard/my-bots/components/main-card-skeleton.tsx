import React from "react";

type Props = {};

const MainCardSkeleton = (props: Props) => {
  return (
    <div className="w-[350px] break-inside-avoid py-4 px-3 bg-gray-200 rounded-[32px] flex flex-col justify-start items-start gap-4 animate-pulse">
      <div className="w-full flex items-center justify-start gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="w-full flex-1 h-12 bg-gray-300 rounded"></div>
      </div>

      <div className="w-full flex items-center justify-start gap-4">
        <div className="w-full flex-1 h-16 bg-gray-300 rounded"></div>
      </div>

      <div className="w-full flex flex-col justify-start items-center gap-2.5">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      <div className="w-full px-1 flex flex-col justify-start items-start gap-3">
        <div className="self-stretch justify-between items-center flex gap-3">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="self-stretch justify-between items-center flex gap-3">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="w-full border border-gray-300"></div>

      <div className="w-full flex flex-col justify-start items-center gap-2.5">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      <div className="w-full border border-gray-300"></div>
      <div className="w-full flex flex-col justify-start items-center gap-2.5">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default MainCardSkeleton;

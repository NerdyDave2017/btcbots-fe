import React from "react";

const LiveTradeEventSkeleton = () => {
  return (
    <div className="w-full xl:w-[679px] h-[268px] py-4 bg-gray-200 rounded-[32px] flex-col justify-start items-start gap-4 inline-flex overflow-scroll animate-pulse">
      <div className="w-full px-4 flex-col justify-start items-start gap-3 flex">
        <div className="w-full justify-between items-start inline-flex gap-3">
          <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="w-full border border-gray-300"></div>
      </div>

      <div className="w-full px-4 flex-row justify-start items-start gap-3 flex">
        <div className="w-1/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-2/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-full px-4 flex-row justify-start items-start gap-3 flex">
        <div className="w-1/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-2/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-full px-4 flex-row justify-start items-start gap-3 flex">
        <div className="w-1/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-2/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-full px-4 flex-row justify-start items-start gap-3 flex">
        <div className="w-1/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-2/3 justify-between items-start inline-flex">
          <div className="w-full h-4 bg-gray-300 rounded"></div>
          <div className=" h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LiveTradeEventSkeleton;

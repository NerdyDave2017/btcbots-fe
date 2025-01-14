import React from "react";

const NotificationSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full flex-col justify-center items-start gap-4 flex">
        <div className="w-full bg-gray-200 rounded-2xl py-4 md:py-8 px-6 flex-col justify-start items-start gap-4 flex">
          <div className="h-5 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 self-stretch text-right float-right"></div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSkeleton;

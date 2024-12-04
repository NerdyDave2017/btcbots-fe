import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1440px] px-5 lg:px-[50px] xl:px-[100px] mx-auto h-full">
      {children}
    </div>
  );
};

export default Container;

import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full px-[48px] mx-auto h-full">{children}</div>;
};

export default Container;

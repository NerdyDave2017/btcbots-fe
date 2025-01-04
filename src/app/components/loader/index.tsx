import React from "react";

const Loader = ({ bg }: { bg: string }) => {
  return (
    /* From Uiverse.io by yohohopizza */
    <div className="flex flex-row gap-2">
      <div className={`w-3 h-3 rounded-full ${bg} animate-bounce`}></div>
      <div
        className={`w-3 h-3 rounded-full ${bg} animate-bounce [animation-delay:-.3s]`}
      ></div>
      <div
        className={`w-3 h-3 rounded-full ${bg} animate-bounce [animation-delay:-.5s]`}
      ></div>
    </div>
  );
};

export default Loader;

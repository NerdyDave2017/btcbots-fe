import React from "react";
import Header from "../components/header";

const page = () => {
  const transactions = [
    {
      type: "Trade Executed Successfully",
      message: "Your buy order for 1 BTC at $20,000 has been filled.",
      date: "28th November, 2024",
    },
    {
      type: "Order Failed",
      message:
        "Your order could not be filled due to insufficient funds. Please deposit more funds to your account.",
      date: "28th November, 2024",
    },
  ];
  return (
    <div className="w-full ">
      <Header text="Notifications" showArrow={false} />
      <div className="px-[48px]">
        <div className="w-full  flex-col justify-center items-start gap-4 inline-flex">
          {transactions.map((transaction) => (
            <div className="self-stretch bg-[#eaf0f6] rounded-2xl py-8 px-[18px] flex-col justify-start items-start gap-4 flex">
              <div className="text-[#090909] text-base font-medium font-['Sora']">
                {transaction.type}
              </div>
              <div className="self-stretch text-[#090909] text-sm font-light font-['Sora']">
                {transaction.message}
              </div>
              <div className="self-stretch text-right text-[#3c3c43]/60 text-xs font-light font-['Sora']">
                {transaction.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

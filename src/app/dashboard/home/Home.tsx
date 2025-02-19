"use client";
import React from "react";
import { UserIcon, MultipleUsersIcon, MyBotsIcon } from "@/public/assets/icons";
import { useFetchBots, useFetchUser } from "@/src/hooks/fetchRequests";

const Home = () => {
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useFetchUser();
  const {
    data: bots,
    error: botError,
    isLoading: botIsLoading,
  } = useFetchBots(user?._id! ?? "");

  const data = [
    {
      value: "$0",
      icon: UserIcon,
      title: "Account Balance",
    },
    {
      value: bots?.length ?? 0,
      icon: MyBotsIcon,
      title: "My Active Bots",
    },
    {
      value: "80%",
      icon: MultipleUsersIcon,
      title: "Win Rate",
    },
  ];

  // const transactions = [
  //   {
  //     type: "Deposit",
  //     message:
  //       "You've successfully deposited $100.00 into your account. Your new balance is $500.00.",
  //     date: "28th November, 2024",
  //   },
  //   {
  //     type: "Withdrawal",
  //     message:
  //       "You've successfully withdrawn $100.00 from your account. Your new balance is $400.00.",
  //     date: "28th November, 2024",
  //   },
  //   {
  //     type: "Deposit",
  //     message:
  //       "You've successfully deposited $100.00 into your account. Your new balance is $500.00.",
  //     date: "28th November, 2024",
  //   },
  //   {
  //     type: "Withdrawal",
  //     message:
  //       "You've successfully withdrawn $100.00 from your account. Your new balance is $400.00.",
  //     date: "28th November, 2024",
  //   },
  // ];
  const transactions: { type: string; message: string; date: string }[] = [];

  return (
    <div className="w-full p-5 lg:p-[48px]  text-text-light font-light">
      <div className="w-full">
        <p className="text-lg lg:text-2xl font-normal">
          Welcome to your dashboard, Jordan
        </p>
        <p className="text-sm">Start by explorer your home</p>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5 lg:gap-[48px] mt-8 lg:mt-[48px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex-1 h-[162px] py-8 bg-[#eaf0f6] rounded-2xl flex-col justify-between items-center flex"
          >
            <p className="text-[24px] lg:text-[32px] font-normal text-center">
              {item.value}
            </p>
            <div className="justify-center items-center gap-2 inline-flex">
              <item.icon className="text-main" />
              <p className="text-base font-light ">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-8 lg:mt-[48px] mb-[48px]">
        <div className="text-lg lg:text-xl font-normal mb-[12px]">
          Recent Transactions
        </div>
        <div className="w-full py-4 md:py-8 bg-[#eaf0f6] rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div className="self-stretch px-[18px] flex-col justify-start items-start gap-4 flex">
                <div className="text-[#090909] text-base font-medium ">
                  {transaction.type}
                </div>
                <div className="self-stretch text-[#090909] text-sm font-light ">
                  {transaction.message}
                </div>
                <div className="self-stretch text-right text-[#3c3c43]/60 text-xs font-light ">
                  {transaction.date}
                </div>
              </div>
            ))
          ) : (
            <p className="">Nothing is here yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

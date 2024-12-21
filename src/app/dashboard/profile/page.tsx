import React from "react";
import Header from "../components/header";
import { ProfileUserIcon, WriteIcon } from "@/public/assets/icons";

const page = () => {
  return (
    <div className="w-full">
      <Header text="Profile" showArrow={false} />

      <div className="w-full max-w-[550px] mx-auto p-6 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className=" relative w-16 h-16  bg-[#f4f6f8] rounded-full flex-col justify-center items-center inline-flex">
            <ProfileUserIcon />

            <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 self-stretch p-1 bg-[#deeaf6] rounded-full justify-center items-center inline-flex">
              <WriteIcon className="cursor-pointer" />
            </div>
          </div>

          <div className="flex-col justify-center items-end gap-[21px] inline-flex">
            <div className="flex-col justify-center items-end gap-3 flex">
              <p className="text-[#3c3c43]/60 text-sm font-normal">Name</p>
              <p className="text-[#090909] text-base font-normal">
                Jordan Great
              </p>
            </div>
            <div className="flex-col justify-center items-end gap-3 flex">
              <p className="text-[#3c3c43]/60 text-sm font-normal">Email</p>
              <p className="text-[#090909] text-base font-normal">
                Jordangreat@gmail.com
              </p>
            </div>
            <div className="flex-col justify-center items-end gap-4 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <p className="text-[#3c3c43]/60 text-sm font-normal">
                  Password
                </p>
                <div className="w-5 h-5 p-[3.33px] justify-center items-center flex">
                  <WriteIcon className="w-[13.33px] h-[13.33px] relative text-main cursor-pointer" />
                </div>
              </div>
              <input
                type="password"
                className="text-[#090909] text-base font-normal bg-transparent outline-none text-right"
                value={"********"}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="justify-between items-start inline-flex cursor-pointer">
          <p className="text-[#e9362b] text-base font-normal">Delete Account</p>
        </div>
      </div>
    </div>
  );
};

export default page;

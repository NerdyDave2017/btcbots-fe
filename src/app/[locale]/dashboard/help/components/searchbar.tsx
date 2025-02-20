import React from "react";
import Image from "next/image";
import flag from "@/public/assets/images/Circle.svg";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full px-5 lg:px-[48px] py-4 bg-[#eaf0f6] justify-center items-center flex gap-3 relative">
      <div className="md:w-[510px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
        <input
          className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
          placeholder="Search for an article"
        />

        <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
      </div>

      <div className="md:absolute h-[32px] border-[#bec9d5] border-[1px] px-[8px] py-[6px] flex items-center justify-between rounded cursor-pointer right-[48px]">
        <span className="h-full w-full">
          <Image src={flag} alt="Flag" />
        </span>
        <span className="">EN</span>
      </div>
    </div>
  );
};

export default SearchBar;

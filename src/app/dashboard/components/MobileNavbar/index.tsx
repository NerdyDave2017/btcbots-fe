import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/images/LogoBig.svg";
import Image from "next/image";
import { UserIcon, MenuIcon } from "@/public/assets/icons";

const Navbar = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className=" lg:hidden px-[20px] py-6 w-full flex items-center justify-between">
      <Link href="/">
        <Image className="w-[59px]" src={Logo} alt="Logo" />
      </Link>
      <div className="justify-start items-center gap-3 flex">
        <div className="p-2 bg-[#ebeef1] rounded-[90px] justify-start items-center gap-2 flex">
          <UserIcon className="w-5 h-5 relative" />
        </div>
        <MenuIcon onClick={onClick} className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;

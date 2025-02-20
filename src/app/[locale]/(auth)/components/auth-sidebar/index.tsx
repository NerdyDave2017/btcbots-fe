import React from "react";
import { SideBarCard, PhoneIcon } from "@/public/assets/icons";

const AuthSidebar = () => {
  return (
    <div className="hidden lg:flex bg-[#090909] xl:min-w-[645px] xl:min-h-[900px] p-[30.32px]  flex-col items-center justify-center gap-10">
      <p className="text-[#f4f6f8] text-[30px] xl:text-[40px] text-center ">
        Trade at convivence
      </p>

      {/* <SideBarCard /> */}
      <PhoneIcon className="lg:w-[350px] xl:w-auto" />
      {/* <div className="w-[326.52px] h-[504.43px] bg-gradient-to-b from-[#006fe3]/[0.6] to-black/[0.5] rounded-[18.66px]" /> */}
    </div>
  );
};

export default AuthSidebar;

import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-primary">Reset Password</p>
        <p className="text-sm font-light text-text-light">
          Type in your new password.
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input
          label="New Password"
          icon="password"
          value=""
          setValue={() => {}}
        />
        <Input
          label="Confirm New Password"
          icon="password"
          value=""
          setValue={() => {}}
        />

        <Button text="Continue" className="w-full flex text-text-dark" />
      </div>
    </div>
  );
};

export default page;

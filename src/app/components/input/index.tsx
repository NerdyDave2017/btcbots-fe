import React, { useEffect, useState } from "react";
import { Mail, EyeClosed, EyeOpen } from "@/public/assets/icons";
import { show } from "@intercom/messenger-js-sdk";

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  icon: "email" | "password" | "text";
  action?: React.ReactNode;
  disabled?: boolean;
};

const Input = ({
  label,
  icon = "text",
  setValue,
  value,
  action,
  disabled,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const icons: Record<string, any> = {
    email: <Mail />,
    password: [<EyeClosed />, <EyeOpen />],
    text: null,
  };

  const returnIcon = (icon: string) => {
    if (icon === "password") {
      return showPassword ? icons[icon][1] : icons[icon][0];
    }
    return icons[icon];
  };

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <label className="text-text-light">{label}</label>

      <div className="w-full flex items-center justify-between border-b border-[#3c3c43]/60 gap-4">
        <input
          type={icon === "password" && showPassword ? "text" : icon}
          className="w-full p-2 outline-none bg-transparent"
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <div
          onClick={() => icon === "password" && setShowPassword(!showPassword)}
          className={`${
            icon === "password" && "cursor-pointer"
          } flex items-center h-full`}
        >
          {returnIcon(icon)}
        </div>
        {action && <div className="text-nowrap cursor-pointer">{action}</div>}
      </div>
    </div>
  );
};

export default Input;

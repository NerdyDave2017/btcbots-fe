import React from "react";
import { Mail, EyeClosed, EyeOpen } from "@/public/assets/icons";

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  icon: "email" | "password" | "text";
  action?: React.ReactNode;
};

const Input = ({ label, icon = "text", setValue, value, action }: Props) => {
  const icons: Record<string, any> = {
    email: <Mail />,
    password: [<EyeClosed />, <EyeOpen />],
    text: null,
  };

  const returnIcon = (icon: string) => {
    if (icon === "password") {
      return value.length > 0 ? icons[icon][1] : icons[icon][0];
    }
    return icons[icon];
  };

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <label className="text-text-light">{label}</label>

      <div className="w-full flex items-center justify-between border-b border-[#3c3c43]/60">
        <input type={icon} className="w-full p-2 outline-none" />{" "}
        {returnIcon(icon)}
        {action && <div className="text-nowrap">{action}</div>}
      </div>
    </div>
  );
};

export default Input;

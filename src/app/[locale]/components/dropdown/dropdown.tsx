import React from "react";

type Props = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  action?: React.ReactNode;
  options: string[];
};

const Dropdown = ({ label, setValue, value, options }: Props) => {
  return (
    <div className="w-full flex flex-col gap-[16px]">
      <label className="text-text-light">{label}</label>

      <select
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full flex items-center justify-between border-b border-[#3c3c43]/60 outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

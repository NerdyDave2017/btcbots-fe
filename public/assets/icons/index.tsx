import { SVGProps } from "react";

export const ArrowRight = (props: SVGProps<any>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 12L3.99998 11.9998"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

import dayjs from "dayjs";

export function range(end: number, start = 0, step = 1): number[] {
  if (end === undefined) [end, start] = [start, 0];
  if (step === undefined) step = start < end ? 1 : -1;

  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => i * step + start
  );
}

export const formatDate = (date: string, format: string) =>
  dayjs(date).format(format); //format sample MMM DD, YYYY. h:mm a

export const calculateTimeDuration = (startTime: string, endTime: string) => {
  // Convert the ISO 8601 string to Date objects
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Calculate the difference in milliseconds
  const diffMs = endDate.getTime() - startDate.getTime();

  // Calculate the hours, minutes, and seconds from the difference
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { hours: diffHours, minutes: diffMinutes, seconds: diffSeconds };
};

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BOT_INTENT = Object.freeze({
  START: "START",
  SOFT_STOP: "SOFT_STOP",
  HARD_STOP: "HARD_STOP",
  RESUME: "RESUME",
  FULFILLED: "FULFILLED",
});

export const formatCurrencyDecimal = (value: string) => {
  switch (value) {
    case "usd":
      return 2;
    case "btc":
      return 6;
    case "eth":
      return 4;
    case "sol":
      return 3;
    default:
      return 2;
  }
};

export const returnSymbol = (value: string) => {
  switch (value) {
    case "usd":
      return "$";
    case "btc":
      return "₿";
    case "eth":
      return "Ξ";
    case "sol":
      return "SOL";
    default:
      return "$";
  }
};

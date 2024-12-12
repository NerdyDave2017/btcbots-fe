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

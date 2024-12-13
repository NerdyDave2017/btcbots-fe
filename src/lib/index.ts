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

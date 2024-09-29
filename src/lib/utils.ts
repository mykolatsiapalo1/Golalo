import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  date: string,
  format?: "short" | "shortWithTime"
) => {
  if (format === "short") {
    const newDate = new Date(date);
    return newDate
      .toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, ".");
  }
  if (format === "shortWithTime") {
    const newDate = new Date(date);
    return (
      newDate
        .toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, ".") +
      " " +
      newDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
  }
  const newDate = new Date(date);
  return newDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatTimeAgo = (date: string): string => {
  const now = new Date();
  const pastDate = new Date(date);
  const diffInMilliseconds = now.getTime() - pastDate.getTime();
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  return `${diffInHours}h`;
};

export const daysAgo = (date: string) => {
  const now = new Date();
  const then = new Date(date);
  const diffTime = Math.abs(now.getTime() - then.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowCalendarIcon } from "@/icons";
import { DayPicker } from "react-day-picker";
import { Typography } from "../core/Typography";
import { buttonVariants } from "@/components/ui/button";
import { useGlobalStore } from "@/globalStore/globalStore";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const user = useGlobalStore(({ user }) => user);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1 w-full py-6 px-8",
        month: "space-y-4 flex-1 w-full",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "bg-transparent p-0 w-10 h-10 hover:bg-accent/50 rounded-[12px] border-none"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-[14px] font-regular leading-[21px] flex-1 text-white-3 opacity-50",
        row: "grid grid-flow-col justify-items-center w-full mt-2",
        cell: "w-8 text-center text-sm p-0 hover:bg-accent/50 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent focus-within:relative focus-within:z-20 rounded-[12px]",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full px-0 text-center aria-selected:opacity-100 hover:bg-transparent text-white-1 bg-transparent"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-transparent text-primary-foreground hover:bg-accent/50 hover:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ArrowCalendarIcon direction="left" {...props} />
        ),
        IconRight: ({ ...props }) => <ArrowCalendarIcon {...props} />,
        CaptionLabel: ({ displayMonth }) => {
          return (
            <div key={displayMonth.toISOString()}>
              <Typography
                className="text-white text-center"
                variant="18px/700/24.59px"
              >
                {displayMonth.toLocaleDateString("en-US", { month: "long" })}
              </Typography>
              <Typography
                className="text-white text-center"
                variant="16px/400/21.86px"
              >
                {displayMonth.toLocaleDateString("en-US", { year: "numeric" })}
              </Typography>
            </div>
          );
        },
        DayContent: ({ date, ...props }) => {
          const tasksToday = user?.tasks.filter((task) => {
            const taskDate = new Date(task.date);
            return (
              taskDate.getFullYear() === date.getFullYear() &&
              taskDate.getDate() === date.getDate() &&
              taskDate.getMonth() === date.getMonth()
            );
          });
          return (
            <div className="grid gap-0.5">
              <Typography
                key={date.toISOString()}
                variant="16px/400/21.86px"
                className="text-white"
              >
                {date.toLocaleDateString("en-US", { day: "numeric" })}
              </Typography>
              <div className="flex flex-wrap gap-0.5 justify-center">
                {tasksToday?.map((task, index) => (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: task.color }}
                    key={index}
                  />
                ))}
              </div>
            </div>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

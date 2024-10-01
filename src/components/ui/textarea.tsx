import * as React from "react";

import { cn } from "@/lib/utils";
import { Typography } from "../core/Typography";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "dark";
  smallLabel?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", smallLabel, ...props }, ref) => {
    return (
      <label className={cn("relative w-full", className)}>
        <textarea
          className={cn(
            `
            flex
            min-h-14
            w-full
            rounded-[12px]
            border
            px-6
            py-4
            text-sm
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            file:text-foreground
            
            disabled:cursor-not-allowed
            disabled:opacity-50

            font-manrope
            text-[16px]
            leading-[21.86px]
            font-regular

            ring-none
            outline-none

            autosize

            
            `,
            variant === "dark"
              ? "bg-[#FFFFFF0D] placeholder:text-[#FFFFFF99] text-white-1 border-[#FFFFFF26] focus-visible:outline-[rgba(255,255,255,0.4)]"
              : "bg-[#F8F8F8] placeholder:text-black-5 text-black-1 border-[#0000001A] focus-visible:outline-[#00000033]",
            !!smallLabel && "pt-[calc(16px+4px+19.12px)] min-h-[78px]",
            className
          )}
          ref={ref}
          {...props}
        />
        {!!smallLabel && (
          <Typography
            variant="14px/600/19.12px"
            className={cn(
              "text-black-3 absolute left-[1px] right-[1px] top-[0.5px] pt-4 pl-6 rounded-[12px_12px_0px_0px]",

              variant === "dark"
                ? "bg-[#FFFFFF0D] text-white-1"
                : "bg-[#F8F8F8]  text-black-1"
            )}
          >
            {smallLabel}
          </Typography>
        )}
      </label>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

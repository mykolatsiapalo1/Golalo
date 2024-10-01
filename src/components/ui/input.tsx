import * as React from "react";

import { cn } from "@/lib/utils";
import { Typography } from "../core/Typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  variant?: "default" | "dark";
  smallLabel?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, icon, variant = "default", smallLabel, ...props },
    ref
  ) => {
    return (
      <label className={cn("relative w-full", className)}>
        <input
          type={type}
          className={cn(
            `
              flex
              min-h-14
              w-full
              rounded-[12px]
              border
              px-6
              py-4
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
            className="text-black-3 absolute left-6 top-4"
          >
            {smallLabel}
          </Typography>
        )}
        {!!icon && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };

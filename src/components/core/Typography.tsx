import {
  createElement,
  HTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type Generic = PropsWithChildren &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

interface Props extends Generic {
  variant?:
    | "14px/500/19.12px"
    | "14px/600/19.12px"
    | "14px/700/19.12px"
    | "14px/400/21px"
    | "16px/400/24px"
    | "16px/400/21.86px"
    | "16px/600/21.86px"
    | "16px/700/21.86px"
    | "18px/600/24.59px"
    | "18px/700/24.59px"
    | "24px/800/32.78px"
    | "32px/700/43.71px";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
}

const styleBy: Record<Required<Props>["variant"], ClassValue> = {
  "14px/500/19.12px": "text-[14px] leading-[19.12px] font-medium",
  "14px/600/19.12px": "text-[14px] leading-[19.12px] font-semibold",
  "14px/700/19.12px": "text-[14px] leading-[19.12px] font-extrabold",
  "14px/400/21px": "text-[14px] leading-[21px] font-regular",
  "16px/400/21.86px": "text-[16px] leading-[21.86px] font-regular",
  "16px/400/24px": "text-[16px] leading-[24px] font-regular",
  "16px/600/21.86px": "text-[16px] leading-[21.86px] font-semibold",
  "16px/700/21.86px": "text-[16px] leading-[21.86px] font-bold",
  "18px/700/24.59px":
    "text-[18px] leading-[24.59px] font-extrabold tracking-[-0.01em] ",
  "18px/600/24.59px": "text-[18px] leading-[24.59px] font-semibold",
  "24px/800/32.78px":
    "text-[24px] leading-[32.78px] font-extrabold tracking-[-0.01em] ",
  "32px/700/43.71px": "text-[32px] leading-[43.71px] font-bold",
};

export function Typography({ as = "p", variant, className, ...props }: Props) {
  return createElement(as, {
    className: cn(variant && styleBy[variant], className, "font"),
    ...props,
  });
}

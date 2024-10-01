import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-[32px] text-sm font-bold transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(0deg,_#FF7125,_#FF7125)] text-accent-foreground hover:bg-accent/90 hover:bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(0deg,_#FF7125,_#FF7125)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-background border border-input hover:bg-accent hover:text-accent-foreground",
        gray: "bg-white-2 ",
        secondary: "bg-black-1 text-white-1 hover:opacity-80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  unRead?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, unRead = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          unRead &&
            "relative after:absolute after:top-[-1px] after:right-[-1px] after:w-[calc(10px+3px*2)] after:aspect-square after:bg-red-500 after:rounded-full after:border-[3px] after:border-white"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

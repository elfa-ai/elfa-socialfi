import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/handlers/types/ui/common";

export const BUTTON_VARIANTS = {
  variant: {
    primary: "bg-purple-500 text-white hover:bg-purple-500/80",
    tertiary:
      "bg-white border text-purple-500 border-purple-500 hover:text-purple-400 hover:border-purple-400",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-200",
    secondary: "bg-gray text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    gray: "bg-gray-100 text-gray-700 hover:bg-gray-200/80",
    link: "text-primary underline-offset-4 hover:underline",
    icon: "rounded p-2 bg-gray-200 hover:bg-gray-300",
  },
  size: {
    default: "px-3 h-10 md:px-4 md:py-2 md:text-base rounded-lg",
    sm: "h-9 rounded-lg px-3",
    lg: "h-11 rounded-lg px-8",
    smallIcon: "size-7 md:size-7 rounded-full",
    icon: "size-9 md:size-10 rounded-full",
    link: "px-0 py-2",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | "primary"
    | "tertiary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "gray"
    | "link"
    | "icon";
  size?: "default" | "lg" | "sm" | "icon" | "smallIcon" | "link";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full",
          BUTTON_VARIANTS.variant[variant],
          BUTTON_VARIANTS.size[size],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };

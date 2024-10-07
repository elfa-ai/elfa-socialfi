import * as React from "react";

import { cn } from "@/handlers/types/ui/common";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[42px] w-full rounded-md border border-gray-300 bg-background px-3 py-4 ring-offset-background file:border-0 file:bg-transparent file:text-sm file: placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          { "bg-gray-100 text-gray-700 ": props.readOnly },
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

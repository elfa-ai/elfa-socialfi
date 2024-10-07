import React from "react";

import { cn } from "@/handlers/types/ui/common";

type TagProps = {
  label: React.ReactNode;
  variant?: "light" | "primary" | "secondary" | "green" | "red" | "default";
  title?: string;
  size?: "xs" | "sm" | "md";
  PreIcon?: any;
  className?: string;
};

const VARIANT_CLASSNAMES: Record<Required<TagProps>["variant"], string> = {
  primary: "text-purple-700 bg-purple-50",
  secondary: "",
  light: "text-gray-900 bg-inherit border border-gray-300",
  green: "bg-green-100 bg-opacity-10 text-green-500",
  red: " bg-red-100 bg-opacity-10 text-red-500",
  default: "bg-gray-100 bg-opacity-10 text-gray-700",
};

const SIZE_CLASSNAMES: Record<Required<TagProps>["size"], string> = {
  xs: "px-[0.3rem] py-[0.05rem] text-xs gap-1",
  sm: "px-2 py-1 text-sm gap-2",
  md: "px-4 py-2 text-base gap-2",
};

const Tag = ({
  title = "",
  label,
  variant = "primary",
  size = "sm",
  className = "",
  PreIcon,
}: TagProps) => {
  return (
    <span
      className={cn(
        "rounded flex items-center",
        VARIANT_CLASSNAMES[variant],
        SIZE_CLASSNAMES[size],
        className,
      )}
      title={title}
    >
      {PreIcon}
      {label}
    </span>
  );
};

export default Tag;

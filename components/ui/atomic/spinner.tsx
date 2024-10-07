import { cn } from "@/handlers/types/ui/common";
import React from "react";

type SpinnerProps = {
  color?: `border-${string}`;
  size?: `size-${string}`;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  color = "border-white",
  size = "size-12",
  className = "",
}) => (
  <span className="flex w-full">
    <span
      className={cn(
        "inline-block border-[3px] border-solid animate-spin !border-t-transparent rounded-full",
        className,
        size,
        color,
      )}
    ></span>
  </span>
);

type LoadingSpinnerTextProps = {
  label?: string;
  size?: SpinnerProps["size"];
  color?: `border-${string}`;
};

const LoadingSpinnerText: React.FC<LoadingSpinnerTextProps> = ({
  size,
  label,
  color = "border-white",
}) => (
  <span className="mx-auto flex items-center">
    <Spinner size={size} color={color} />
    {label && <span className="ml-2">{label}</span>}
  </span>
);

export default LoadingSpinnerText;

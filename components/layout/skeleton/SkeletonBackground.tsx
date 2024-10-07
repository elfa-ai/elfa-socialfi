import React from "react";
import type { HTMLDivProps } from "@/handlers/types/ui/html";
import { cn } from "@/handlers/types/ui/common";

type SkeletonBackgroundProps = HTMLDivProps & {
  isLoading: boolean;
};

const SkeletonBackground = ({
  children,
  isLoading,
  className = "",
}: SkeletonBackgroundProps) => {
  return isLoading ? (
    <div
      className={cn(
        "animate-pulse h-full w-full bg-gray-300 rounded-lg",
        className,
      )}
    />
  ) : (
    children
  );
};

export default SkeletonBackground;

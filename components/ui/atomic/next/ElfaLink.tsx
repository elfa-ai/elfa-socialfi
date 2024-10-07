"use client";

import { cn } from "@/handlers/types/ui/common";
import Link, { LinkProps } from "next/link";

export const ElfaLink = (
  props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  return (
    <Link
      {...props}
      className={cn(
        "hover:underline hover:underline-offset-2",
        props.className,
      )}
      onClick={(e) => {
        props?.onClick?.(e) ?? e.stopPropagation();
      }}
    />
  );
};

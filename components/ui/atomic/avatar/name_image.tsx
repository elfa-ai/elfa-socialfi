import { cn } from "@/handlers/types/ui/common";
import React from "react";

type AvatarNameImageProps = {
  className?: string;
  fullName: string;
};

const getInitials = (fullName: string) => {
  const allNames = fullName.trim().split(" ");
  const initials = allNames.reduce(
    (acc: string, curr: string, index: number) => {
      if (index === 0 || index === allNames.length - 1) {
        // eslint-disable-next-line no-param-reassign
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    },
    "",
  );
  return initials;
};

const AvatarNameImage = ({
  fullName,
  className = "",
}: AvatarNameImageProps) => {
  const initial = getInitials(fullName);
  return (
    <span
      className={cn(
        "rounded-full size-12 bg-purple-100 text-purple-500 grid place-items-center",
        className,
      )}
    >
      {initial}
    </span>
  );
};

export default AvatarNameImage;

import { Button } from "@/components/ui/button";
import ElfaTooltip from "@/components/ui/compound/floating/ElfaTooltip";
import { cn } from "@/handlers/types/ui/common";
import ShareIcon from "@/public/icons/common/share.svg";
import React from "react";

interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: Required<React.ButtonHTMLAttributes<HTMLButtonElement>>["onClick"];
  isActive: boolean;
  title?: string;
}

const ShareButton = ({
  onClick,
  isActive,
  title,
  ...props
}: ShareButtonProps) => {
  return (
    <ElfaTooltip
      align="center"
      title={title ?? "Share"}
      contentClassName="w-fit h-fit"
    >
      <Button
        variant="icon"
        size="icon"
        className="group hover:bg-pink-500 hover:bg-opacity-10"
        onClick={onClick}
        {...props}
      >
        <ShareIcon
          className={cn("group-hover:fill-pink-500 fill-gray-900", {
            "fill-pink-500": isActive,
          })}
        />
      </Button>
    </ElfaTooltip>
  );
};

export default ShareButton;

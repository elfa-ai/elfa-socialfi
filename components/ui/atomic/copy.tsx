import React, { useRef, useState } from "react";
import { cn } from "@/handlers/types/ui/common";
// import { MdContentCopy } from '@react-icons/all-files/md/MdContentCopy';
import ProfileCopyIcon from "@/public/icons/profile/copy.svg";
import CommonCopyIcon from "@/public/icons/common/copy.svg";
import { FaCheck } from "@react-icons/all-files/fa6/FaCheck";
import ElfaTooltip from "@/components/ui/compound/floating/ElfaTooltip";
import { copyContent } from "@/handlers/utils/browser";
import { Button, ButtonProps } from "../button";

type CopyProps = {
  textToCopy: string;
  extraClassName?: string;
  color?: `fill-${string}`;
  isWalletAddress?: boolean;
  size?: Extract<ButtonProps["size"], "icon" | "smallIcon">;
};

const Copy = ({
  textToCopy,
  color,
  extraClassName = "",
  isWalletAddress = false,
  size = "smallIcon",
}: CopyProps) => {
  const [isCopying, setIsCopying] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();

  const handleCopy = () => {
    if (isCopying) return;

    setIsCopying(true);
    copyContent(textToCopy);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setIsCopying(false), 1000);
  };

  return (
    <Button
      // className={cn(
      //   'rounded-full text-xs h-full hover:scale-105 transition duration-100',
      //   { 'cursor-auto': isCopying },
      //   extraClassName
      // )}
      className={extraClassName}
      onClick={handleCopy}
      variant="icon"
      size={size}
    >
      {isCopying ? (
        <ElfaTooltip
          contentClassName="h-fit w-fit"
          delayDuration={0}
          title="Copied to clipboard"
        >
          <FaCheck className={cn("size-4", color)} />
        </ElfaTooltip>
      ) : (
        <ElfaTooltip contentClassName="h-fit w-fit" title="Copy">
          {isWalletAddress ? (
            <ProfileCopyIcon className={cn("size-[1.05rem]", color)} />
          ) : (
            <CommonCopyIcon className="size-3 fill-gray-900" />
          )}
        </ElfaTooltip>
      )}
    </Button>
  );
};

export default Copy;

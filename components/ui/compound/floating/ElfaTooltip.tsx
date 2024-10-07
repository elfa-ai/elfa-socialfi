import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { cn } from "@/handlers/types/ui/common";

interface IElfaTooltip {
  children: React.ReactNode;
  title: React.ReactNode;
  side?: any;
  align?: any;
  contentClassName?: string;
  contentProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  titleClassName?: string;
  delayDuration?: number;
}

const DEFAULT_TOOLTIP_DELAY_DURATION = 200;

const ElfaTooltip = ({
  children,
  title,
  side = "top",
  align = "start",
  contentClassName,
  contentProps,
  titleClassName,
  delayDuration = DEFAULT_TOOLTIP_DELAY_DURATION,
}: IElfaTooltip) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger
          className={cn("h-full w-full", contentClassName)}
          {...contentProps}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent
          className={cn(
            "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            "w-fit text-xs",
            titleClassName,
          )}
          side={side}
          align={align}
          collisionPadding={8}
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ElfaTooltip;

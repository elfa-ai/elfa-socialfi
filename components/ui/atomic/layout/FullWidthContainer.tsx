// 'use client';

// import useInitRender from '@/handlers/hooks/layout/useInitRender';
// import { useWindowsResize } from '@/handlers/hooks/layout/useWindowResize';
import { cn } from "@/handlers/types/ui/common";
import React from "react";

type FullWidthContainerProps = {
  childClassName?: string;
  children: React.ReactNode;
  parentClassName?: string;
  parentProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

const FullWidthContainer = ({
  parentClassName = "",
  childClassName = "bg-transparent",
  parentProps,
  children,
}: FullWidthContainerProps) => {
  // const initRender = useInitRender();
  // const { size } = useWindowsResize();

  return (
    <div {...parentProps} className={cn("w-full", parentClassName)}>
      <div
        className={cn(
          "max-w-screen-2xl mx-auto",
          "px-4 xs:px-6 sm:px-8 2xl:px-0",
          childClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FullWidthContainer;

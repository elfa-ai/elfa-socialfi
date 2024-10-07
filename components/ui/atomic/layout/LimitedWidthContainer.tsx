import React from "react";
import { cn } from "@/handlers/types/ui/common";

type LimitedWidthContainerProps = {
  extraClassName?: string;
  children: React.ReactNode;
};

const LimitedWidthContainer = ({
  extraClassName = "",
  children,
}: LimitedWidthContainerProps) => {
  return (
    <section
      className={cn("max-w-[28rem] px-4 md:px-6 mx-auto pt-24", extraClassName)}
    >
      {children}
    </section>
  );
};

export default LimitedWidthContainer;

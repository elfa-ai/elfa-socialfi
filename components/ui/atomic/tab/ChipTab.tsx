import React from "react";
import { cn } from "@/handlers/types/ui/common";
import { motion } from "framer-motion";

type ChipTabProps<TabKeyType extends string = string> = {
  contents: { label: string; key: TabKeyType; Icon?: any }[];
  activeTabKey: TabKeyType;
  setActiveTabKey: (newTabKey: TabKeyType) => void;
  extraContainerClassname?: string;
};

const ChipTab = <TabKeyType extends string = string>({
  contents,
  activeTabKey,
  setActiveTabKey,
  extraContainerClassname = "",
}: ChipTabProps<TabKeyType>) => {
  return (
    <div className={cn("flex space-x-1 max-h-10", extraContainerClassname)}>
      {contents.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTabKey(tab.key)}
          className={cn(
            "relative rounded-full px-3 py-2 border border-gray-300 transition focus-visible:outline-2 focus-visible:ring-ring focus-visible:ring-offset-2 z-[1] whitespace-nowrap",
            "text-sm text-white hover:text-white hover:bg-gray-300",
          )}
        >
          {tab.label}

          {activeTabKey === tab.key && (
            <motion.span
              layoutId={contents.map((content) => content.key).join("-")}
              className="absolute inset-0 bg-gray-300 rounded-full px-2 z-[-1]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.15 }}
              initial={false}
            />
          )}
        </button>
      ))}
    </div>
  );
};
export default ChipTab;

import React, { useMemo } from "react";
import { formatDateTimeDistance } from "@/handlers/utils/helpers/datetime";

import Image from "next/image";

export type SectionCardTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  timestamp?: number | string;
  Icon: React.ReactNode;
  titleTooltip?: string;
  ownerName?: string;
  ownerPict?: string;
};

export const SectionCardTitle = ({
  title,
  Icon,
  timestamp,
  subtitle,
  ownerName,
  ownerPict,
}: SectionCardTitleProps) => {
  const timeDisplay = useMemo(() => {
    if (!timestamp) return "";
    if (typeof timestamp === "string") return timestamp;
    return formatDateTimeDistance(timestamp, true);
  }, [timestamp]);

  const isAccessPassed =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("accessPass") ?? "false");

  const CardWord = (
    <div className="text-left">
      <span className="font-semibold">{title}</span>
      {timeDisplay && (
        <>
          <span className="size-1 bg-gray-900 rounded-full mx-1 inline-block align-middle"></span>
          <span className="text-gray-700">{timeDisplay}</span>
        </>
      )}
    </div>
  );

  const CardHeader = (
    <div className="flex items-start gap-3">
      <div className="max-w-10 min-w-5 w-fit">
        <div className="relative mt-[0.15rem]">{Icon}</div>
      </div>

      <div className="flex flex-col gap-[2px] text-gray-900">
        {CardWord}

        <div className="text-left ">{subtitle}</div>
      </div>
    </div>
  );

  if (ownerName && ownerPict && isAccessPassed)
    return (
      <div className="flex flex-col gap-1">
        <div className="rounded-full py-[2px] px-[6px] flex items-center gap-1 text-orange-500 bg-orange-100 bg-opacity-10 w-fit">
          <Image src={ownerPict} width={12} height={12} alt="" />
          <div className="text-xs">{ownerName} received this signal</div>
        </div>

        {CardHeader}
      </div>
    );

  return CardHeader;
};

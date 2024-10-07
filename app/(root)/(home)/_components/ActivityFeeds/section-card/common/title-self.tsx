import React, { useMemo } from "react";
import { formatDateTimeDistance } from "@/handlers/utils/helpers/datetime";
import Image from "next/image";
import SignalSubtitleNumberDisplay from "../signal/SignalSubtitleNumberDisplay";

export type SectionCardTitleProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  timestamp?: number | string;
  Icon: React.ReactNode;
  titleTooltip?: string;
  // author?: Author TODO
  ownerName?: string;
  ownerPict?: string;
  data?: any;
};

export const SectionCardTitleSelf = ({
  title,
  Icon,
  timestamp,
  subtitle,
  titleTooltip,
  ownerName,
  ownerPict,
  data,
}: SectionCardTitleProps) => {
  const timeDisplay = useMemo(() => {
    if (!timestamp) return "";
    if (typeof timestamp === "string") return timestamp;
    return formatDateTimeDistance(timestamp, true);
  }, [timestamp]);

  const CardWord = (
    <div className="text-left">
      <span className="font-semibold">Tsuki.eth</span>
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
        <div className="text-left text-sm">
          Just received a confluence of Geodnet catalysts. Sizing up on
          positions slowly for 2025 Q1.
        </div>
        <div className="mt-1">
          <div className="flex items-center">
            <SignalSubtitleNumberDisplay
              price={data[0].overview.price}
              mention={data[0].overview.mention}
              timeInformation="1d"
              preNode={
                <div className="bg-white size-5 rounded-full">
                  <Image
                    src={
                      "https://s2.coinmarketcap.com/static/img/coins/64x64/20969.png"
                    }
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

  return CardHeader;
};

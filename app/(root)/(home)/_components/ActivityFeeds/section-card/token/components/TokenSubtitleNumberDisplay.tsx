import { TokenOverview } from "@/handlers/types/token";

import React from "react";
import { SupportedDayType } from "@/handlers/types/common";
import ValueIndication from "@/components/ui/atomic/typography/value-indication";
import { getMostGranularChangeWithTimeInformation } from "@/handlers/utils/explore/number";
import MentionedBy from "@/components/explore/_common/wording/MentionedBy";
import { FeedTokenData } from "@/handlers/types/feed";

type TokenSubtitleNumberDisplayProps = {
  mention: TokenOverview["mention"];
  price: TokenOverview["price"];
  mentionedBy: FeedTokenData["mentionedBy"];
  timeInformation?: SupportedDayType;
};

const TokenSubtitleNumberDisplay = ({
  mention,
  price,
  mentionedBy,
  timeInformation = "1d",
}: TokenSubtitleNumberDisplayProps) => {
  const priceDisplay = getMostGranularChangeWithTimeInformation(
    price,
    "percentage",
    timeInformation,
  );
  const engagementDisplay = getMostGranularChangeWithTimeInformation(
    mention,
    "absolute",
    timeInformation,
  );

  return (
    <div className="text-sm">
      <div className="flex justify-between items-center mb-1 gap-4">
        <MentionedBy
          mentionedBy={mentionedBy}
          shouldHaveAction={false}
          labelRenderer={() => {
            return (
              <>
                <ValueIndication
                  containerClassName="inline"
                  valueClassName="inline text-sm font-semibold"
                  value={engagementDisplay.value}
                />{" "}
                {/* <span className="inline"> */}
                {engagementDisplay.value > 1
                  ? "Smart mentions"
                  : "Smart mention"}{" "}
                <span className="hidden md:inline">
                  ({engagementDisplay.timeInformation}){/* </span> */}
                </span>
              </>
            );
          }}
        />
        <div className="flex flex-col">
          <ValueIndication
            containerClassName="no-scrollbar overflow-x-auto gap-1"
            valueClassName="text-sm font-semibold"
            value={priceDisplay.value}
            delta={priceDisplay.delta}
            isPercentage
            numberType="price"
          />
          {/* <div className="text-xs text-gray-700">
            Price ({priceDisplay.timeInformation})
          </div> */}
        </div>

        {/* <div className="flex">
          <ValueIndication
            containerClassName="no-scrollbar overflow-x-auto gap-1"
            valueClassName="text-sm"
            value={engagementDisplay.value}
            delta={engagementDisplay.delta}
            isPercentage={false}
            PostValueComponent={
              <span className="ml-1">
                Smart Mentions ({priceDisplay.timeInformation})
              </span>
            }
            isArrowStyle
          />
        </div> */}
      </div>
    </div>
  );
};

export default TokenSubtitleNumberDisplay;

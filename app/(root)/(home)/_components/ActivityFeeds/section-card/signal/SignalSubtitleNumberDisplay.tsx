import { TokenOverview } from "@/handlers/types/token";

import React from "react";
import { SupportedDayType } from "@/handlers/types/common";
import ValueIndication from "@/components/ui/atomic/typography/value-indication";
import { getMostGranularChangeWithTimeInformation } from "@/handlers/utils/explore/number";

type TokenSubtitleNumberDisplayProps = {
  mention: TokenOverview["mention"];
  price: TokenOverview["price"];
  timeInformation?: SupportedDayType;
  preNode?: any;
};

const SignalSubtitleNumberDisplay = ({
  mention,
  price,
  timeInformation = "1d",
  preNode,
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
      <div className="flex justify-between items-center mb-1 gap-2">
        {preNode && <div>{preNode}</div>}
        <div className="flex flex-col gap-2">
          <ValueIndication
            containerClassName="no-scrollbar overflow-x-auto gap-1"
            valueClassName="text-sm font-semibold"
            value={priceDisplay.value}
            delta={priceDisplay.delta}
            isPercentage
            numberType="price"
          />
        </div>

        <div className="flex gap-1 items-center">
          <ValueIndication
            containerClassName="no-scrollbar overflow-x-auto gap-1"
            valueClassName="text-sm font-semibold"
            value={engagementDisplay.value}
          />
          Smart mentions
          <ValueIndication
            containerClassName="no-scrollbar overflow-x-auto gap-1"
            delta={engagementDisplay.delta}
            numberType="price"
          />
        </div>
      </div>
    </div>
  );
};

export default SignalSubtitleNumberDisplay;

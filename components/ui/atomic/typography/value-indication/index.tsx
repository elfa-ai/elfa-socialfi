import {
  roundPercentageValue,
  roundTokenValue,
  formatPriceDisplay,
  formatRoundNumberToShortForm,
} from "@/handlers/utils/helpers/number";
import { cn } from "@/handlers/types/ui/common";
import React from "react";
import { SupportedDayType } from "@/handlers/types/common";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { isDefined } from "@/handlers/utils/common";

type ValueIndicationProps = {
  value?: number;
  delta?: number;
  isPercentageValue?: boolean;
  isPercentage?: boolean;
  containerClassName?: string;
  valueClassName?: string;
  deltaClassName?: string;
  timeInformation?: SupportedDayType;
  numberType?: "price" | "number";
  isArrowStyle?: boolean;
  PostValueComponent?: React.ReactNode;
};

const ValueIndication = ({
  value,
  delta,
  isPercentageValue = false,
  isPercentage = true,
  containerClassName = "",
  valueClassName = "",
  deltaClassName = "",
  timeInformation,
  numberType = "number",
  isArrowStyle = !false,
  PostValueComponent = null,
}: ValueIndicationProps) => {
  const deltaValue = roundTokenValue(delta ?? 0);
  const realValue = roundTokenValue(value ?? 0);

  const renderDeltaValue = () => {
    if (isArrowStyle) {
      return (
        <div className="flex items-center gap-[0.1rem]">
          {deltaValue !== 0 && (
            <FaArrowUp
              className={cn("size-2.5", {
                "fill-green-500": deltaValue > 0,
                "fill-red-500 rotate-180": deltaValue < 0,
              })}
            />
          )}
          {isPercentage
            ? `${roundPercentageValue(Math.abs(deltaValue))}%`
            : formatRoundNumberToShortForm(Math.abs(deltaValue))}
        </div>
      );
    }

    return (
      <>
        {deltaValue > 0 ? "+" : ""}
        {isPercentage
          ? `${roundPercentageValue(deltaValue)}%`
          : formatRoundNumberToShortForm(deltaValue)}
        {timeInformation ? ` (${timeInformation})` : ""}
      </>
    );
  };
  return (
    <div
      className={cn(
        "flex gap-2",
        {
          "items-center": isArrowStyle || valueClassName.includes("text-xl"),
          "items-baseline":
            !isArrowStyle && !valueClassName.includes("text-xl"),
        },
        containerClassName,
      )}
    >
      {isDefined(value) ? (
        <div className={cn("text-base  text-gray-900", valueClassName)}>
          {numberType === "price"
            ? formatPriceDisplay(realValue)
            : formatRoundNumberToShortForm(realValue)}
          {isPercentageValue ? "%" : ""}
          {PostValueComponent}
        </div>
      ) : null}

      {!!deltaValue ? (
        <div
          className={cn(
            "text-xs  py-[2px] px-1 rounded",
            {
              "bg-green-500 bg-opacity-10 text-green-500": deltaValue > 0,
              "bg-red-500 bg-opacity-10 text-red-500": deltaValue < 0,
              "text-gray-900900-900": deltaValue === 0,
            },
            deltaClassName,
          )}
        >
          {renderDeltaValue()}
        </div>
      ) : null}
    </div>
  );
};

export default ValueIndication;

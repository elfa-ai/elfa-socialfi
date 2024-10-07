import { DEFAULT_METADATA_DAY_TYPE } from "@/handlers/constants/settings";
import {
  SupportedChangeType,
  SupportedDayType,
  ValueWithChanges,
} from "@/handlers/types/common";

export const SORTED_TIME_GRANULARITY = [
  "4h",
  "1d",
  "7d",
  "14d",
  "30d",
] as SupportedDayType[];

export const getMostGranularChangeWithTimeInformation = (
  valueWithChanges: ValueWithChanges,
  changeType: SupportedChangeType,
  defaultTimeInformation?: SupportedDayType,
) => {
  if (
    !!defaultTimeInformation &&
    !!valueWithChanges?.[`change${defaultTimeInformation}`]?.change?.[
      changeType
    ]
  ) {
    return {
      timeInformation: defaultTimeInformation,
      delta:
        valueWithChanges?.[`change${defaultTimeInformation}`]?.change?.[
          changeType
        ],
      value: valueWithChanges.current,
    };
  }

  for (const timeInformation of SORTED_TIME_GRANULARITY) {
    if (
      !!valueWithChanges?.[`change${timeInformation}`]?.change?.[changeType]
    ) {
      return {
        timeInformation,
        delta:
          valueWithChanges?.[`change${timeInformation}`]?.change?.[changeType],
        value: valueWithChanges.current,
      };
    }
  }
  return {
    timeInformation: DEFAULT_METADATA_DAY_TYPE,
    delta: 0,
    value: 0,
  };
};

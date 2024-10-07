import { SupportedChangeType, SupportedDayType } from "../types/common";

export const MOCK_IMAGE_URL = "/brand_assets/avatar.png";
export const MOCK_SKELETON_IMAGE_URL = "/icons/smart-accounts.svg";

export const DEFAULT_TOTAL_REFERRAL = 3;

export const DEFAULT_CHART_DAY_TYPE: SupportedDayType = "30d";

export const DEFAULT_METADATA_DAY_TYPE: SupportedDayType = "30d";
export const DEFAULT_METADATA_CHANGE_TYPE: SupportedChangeType = "percentage"; // 'percentage' | 'absolute'

export const ALL_SUPPORTED_DAY_TYPES = [
  "4h",
  "1d",
  "7d",
  "14d",
  "30d",
] as SupportedDayType[];

export const DISPLAYED_TOKEN_SEARCH_RESULT = 5;
export const DISPLAYED_ACCOUNT_SEARCH_RESULT = 3;

export const DISPLAYED_SMART_ACCOUNT_ACTIVITY_FEED_AMOUNT = 10;

export const DISPLAYED_ACCOUNT_TOKEN_MENTION_AMOUNT = 5;

export const DEFAULT_PRICE_CHART_LINE_COLOR = "#F36FD5";
export const DEFAULT_BULLISH_CHART_LINE_COLOR = "#10B981";
export const DEFAULT_BEARISH_CHART_LINE_COLOR = "#EF4444";

export const DEFAULT_BULLISH_CHART_AREA_COLOR = "#10B98133";
export const DEFAULT_BEARISH_CHART_AREA_COLOR = "#EF444433";

export const DEFAULT_MENTION_CHART_LINE_COLOR = "#902BD4";
export const DEFAULT_MENTION_CHART_AREA_COLOR = "#E4D1F3";

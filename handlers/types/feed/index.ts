import { HotPost } from "../post";
import { TokenOverview } from "../token";

export type FeedType = "token" | "post" | "signal";

export type HomePageActivityFeedType = "all" | FeedType;

export type GenericFeedCategory = any;

export type FeedTokenCategory =
  | "bullish"
  | "bearish"
  | "bullish-reversal"
  | "bearish-reversal";

export type FeedTokenData = {
  overview: TokenOverview;
  mentionedBy: {
    accounts: any[];
    count: number;
  };
  trendingReason?: any;
};

export type FeedPostCategory = "hot-post-engagement";
export type FeedPostData = {
  account: any;
  post: HotPost;
};

export type FeedSignalCategory = "signal";
export type FeedSignalData = any;

export type TokenFeedCategory = any;
export type PostFeedCategory = any;
export type SignalFeedCategory = any;

export type FeedCategory =
  | TokenFeedCategory
  | PostFeedCategory
  | SignalFeedCategory;

// TYPE VALIDATORS

export const isFeedTypeToken = (
  feed: FeedCategory,
): feed is TokenFeedCategory => {
  return feed.type === "token";
};

export const isFeedTypePost = (
  feed: FeedCategory,
): feed is PostFeedCategory => {
  return feed.type === "post";
};

import elfaApi from "@/handlers/api/core";
import type { ElfaAPIPromise } from "../core/types";
import type { ActivityFeedResponseBody } from "../core/types/feed";
import { DEFAULT_OFFSET } from "../core/constants";
import { useRef } from "react";
import { HomePageActivityFeedType } from "@/handlers/types/feed";

// eslint-disable-next-line import/extensions
import activityFeedData from "@/handlers/constants/mock/activityFeed.json";

export const getActivityFeed = ({
  activityFeedType = "all",
  pageParam = 0,
}: {
  pageParam: unknown;
  activityFeedType: HomePageActivityFeedType;
}): ElfaAPIPromise<ActivityFeedResponseBody> => {
  return elfaApi.get(
    `/activityFeed?${activityFeedType === "all" ? "" : `type=${activityFeedType}&`}offset=${(pageParam as number) * DEFAULT_OFFSET}`,
  );
};

export const ACTIVITY_FEED_QUERY_KEYS = (
  activityFeedType: HomePageActivityFeedType,
) => ["activityFeed", activityFeedType];

export const useActivityFeed = () => {
  const flatData = activityFeedData.data;

  const parentRef = useRef<HTMLDivElement>(null);

  return {
    parentRef,
    activityFeedResponse: {
      flatData,
      error: null,
      isLoading: false,
      isFetching: false,
      isFetchingNextPage: false,
      hasNextPage: false,
    },
  };
};

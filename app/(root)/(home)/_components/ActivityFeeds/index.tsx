import React, { useRef } from "react";

import LoadingSpinnerText from "@/components/ui/atomic/spinner";
import { cn } from "@/handlers/types/ui/common";
import SectionCard from "./section-card";
import { HomePageActivityFeedType } from "@/handlers/types/feed";
import ChipTab from "@/components/ui/atomic/tab/ChipTab";
import useTabState from "@/handlers/hooks/element/useTabState";

import { useActivityFeed } from "@/handlers/api/feed/activityFeed";
import { isElementTopVisible } from "@/handlers/utils/element";
import SelfPost from "./section-card/self/SelfPost";

const ACTIVITY_FEED_TAB_CONTENT = [
  { label: "All", key: "all" as HomePageActivityFeedType },
  { label: "Tokens", key: "token" as HomePageActivityFeedType },
  { label: "Trending Posts", key: "post" as HomePageActivityFeedType },
];

const ActivityFeeds = ({ currentView }: any) => {
  const activityFeedTabState = useTabState<HomePageActivityFeedType>("all", {
    syncParam: true,
    paramKey: "tab",
  });

  const {
    parentRef,

    activityFeedResponse: {
      flatData: activityFeedData,

      hasNextPage,
    },
  } = useActivityFeed();

  const loadingRef = useRef<HTMLDivElement>(null);

  const isAccessPassed =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("accessPass") ?? "false");

  const finalData = activityFeedData.filter((datum) => {
    if (!isAccessPassed) return !datum.ownerName;

    if (!currentView || currentView === "Tristan")
      return datum.ownerName !== "Super user";
    if (!datum.ownerName) return false;
    return currentView === datum.ownerName;
  });

  return (
    <>
      <div className="px-4 sm:px-0 sticky top-0 bg-purple-bg z-[20] py-4">
        <div className="sticky top-20 bg-purple-bg z-[20]">
          <ChipTab
            contents={ACTIVITY_FEED_TAB_CONTENT}
            {...activityFeedTabState}
            setActiveTabKey={(val) => {
              activityFeedTabState.setActiveTabKey(val);
              if (
                parentRef.current &&
                !isElementTopVisible(parentRef.current, 64)
              ) {
                parentRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          />
        </div>
      </div>

      <div
        className={cn(
          "w-full",
          "md:rounded-t-3xl md:border-t md:rounded-b-3xl md:border-y no-scrollbar",
          "scroll-m-20",
        )}
        ref={parentRef}
      >
        <div className="w-full relative">
          {currentView !== "Tristan" && isAccessPassed && (
            <div key={"dfmonrgiebtukerywlieor;fh4fbilh34oirf"}>
              <div className="border-b md:border-b-0">
                <div
                  className={cn(
                    "px-4 sm:px-0 md:rounded-t-3xl md:border-r md:border-l",
                  )}
                >
                  <SelfPost />
                </div>
              </div>
            </div>
          )}
          {finalData.map((feedDatum, index) => {
            const post = feedDatum;
            const usedIndex =
              index + (currentView !== "Tristan" && isAccessPassed ? 1 : 0);

            const lastIndex =
              finalData.length +
              (currentView !== "Tristan" && isAccessPassed ? 1 : 0);

            return (
              <div key={`${post.timestamp}-${index}`}>
                <div className="border-b md:border-b-0">
                  <div
                    className={cn(
                      "md:border-r md:border-l border-gray-300 px-4 sm:px-0",
                      {
                        "md:rounded-t-3xl": usedIndex === 0,
                        "md:border-t": usedIndex > 0 && usedIndex < lastIndex,
                        "md:rounded-b-3xl": usedIndex === lastIndex - 1,
                      },
                    )}
                  >
                    <SectionCard cardData={post as any} />
                  </div>
                </div>
              </div>
            );
          })}

          {hasNextPage && (
            <div
              className="md:rounded-b-3xl md:border-y md:border-x"
              ref={loadingRef}
            >
              <div className="flex justify-center p-4">
                <LoadingSpinnerText color="border-purple-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ActivityFeeds;

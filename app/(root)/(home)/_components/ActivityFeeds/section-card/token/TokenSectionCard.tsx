import React from "react";

import { FeedTokenData } from "@/handlers/types/feed";
import { cn } from "@/handlers/types/ui/common";

type TokenSectionCardProps<T = FeedTokenData> = {
  data: T[];
};

const TokenSectionCard = ({ data }: TokenSectionCardProps) => {
  const doesFeedTokenDataContainModalInformation = (
    information: FeedTokenData,
  ) => {
    return (
      "trendingReason" in information &&
      (information.trendingReason?.supportingTweets ?? []).length > 0
    );
  };

  return (
    <>
      <div className="flex items-center gap-1 flex-col w-full pl-0">
        {data.toSpliced(1).map((datum) => {
          return (
            <div
              className="w-full py-2 flex gap-3 flex-col"
              key={JSON.stringify(datum?.trendingReason?.headline)}
            >
              <div
                className={cn(
                  "flex flex-col gap-2 md:gap-4 p-4 md:px-6 md:py-4 transition duration-100 bg-gray-100 rounded-lg",
                  {
                    "cursor-pointer hover:bg-gray-200":
                      doesFeedTokenDataContainModalInformation(datum),
                  },
                )}
              >
                <div className="text-gray-900">
                  {datum?.trendingReason?.isSignificant && (
                    <>
                      <span className="font-bold">Potential Reason:</span>{" "}
                    </>
                  )}
                  {datum?.trendingReason?.explanation ??
                    datum?.trendingReason?.headline ??
                    "Unknown"}
                </div>

                {/* <MentionedBy
                  mentionedBy={datum.mentionedBy}
                  shouldHaveAction={false}
                  labelRenderer={() => {
                    const firstUser = datum.mentionedBy.accounts[0];
                    const finalCount = datum.mentionedBy.count - 1;
                    return (
                      <>
                        {`${firstUser.data.name} ${`and ${finalCount > 1 ? `${finalCount} others` : `${finalCount} other`}  mentioned`} ${datum.overview.token.data.ticker.toUpperCase()}`}
                        <ElfaLink
                          href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${firstUser.username}`}
                        >
                          {firstUser.data.name}
                        </ElfaLink>{' '}
                        <button>
                          {`and ${finalCount > 1 ? `${finalCount} others` : `${finalCount} other`}  mentioned`}
                        </button>{' '}
                        <ElfaLink href={datum.overview.token.slug}>
                          {datum.overview.token.data.ticker.toUpperCase()}
                        </ElfaLink>
                      </>
                    );
                  }}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TokenSectionCard;

import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import { FE_URL } from "@/handlers/constants/route";

import { cn } from "@/handlers/types/ui/common";
import Image from "next/image";
import React from "react";
import FollowerText from "../../_common/account/FollowerText";
import Tag from "@/components/ui/atomic/tag";

type PostDisplayTitleProps = {
  account: any;
  activeToken?: any;
  sentiment?: any;
  size?: "base" | "sm"; // base: feed, xs: tooltip tweet display
};

const PostDisplayTitle = ({
  account,
  activeToken,
  sentiment,
  size = "base",
}: PostDisplayTitleProps) => {
  const getSentimentVariant = () => {
    if (sentiment === "neutral") return "default";
    if (sentiment === "bullish") return "green";
    if (sentiment === "bearish") return "red";
    return "default";
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-auto gap-[0.25rem] items-center">
        <ElfaLink
          href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${account.username}`}
          className={cn(
            "overflow-hidden text-ellipsis dark:text-gray-200 text-gray-900 break-all",
            {
              "h-[20px] text-sm ": size === "sm",
              "h-6 font-semibold": size === "base",
            },
          )}
        >
          {account.data.name}
        </ElfaLink>
        {activeToken && (
          <div className={cn("flex flex-initial items-center mr-4")}>
            <div
              className={cn(" text-gray-900 dark:text-purple-300", {
                "text-sm": size === "sm",
              })}
            >
              mentioned
            </div>

            <div
              className={cn(
                "flex items-center gap-1 rounded-full min-w-fit text-gray-900 dark:text-gray-200",
              )}
            >
              <ElfaLink href={`${FE_URL.EXPLORE_TOKEN}/${activeToken.slug}`}>
                <Image
                  width={18}
                  height={18}
                  className="bg-white rounded-full ml-1"
                  src={activeToken.data.image}
                  alt=""
                />
              </ElfaLink>
              {/* <ElfaLink href={`${FE_URL.EXPLORE_TOKEN}/${activeToken.slug}`}>
                <span className=" text-sm">
                  ${activeToken.data.ticker.toUpperCase()}
                </span>
              </ElfaLink> */}
            </div>
          </div>
        )}
      </div>
      <div
        className={cn("text-gray-700 flex items-center gap-2", {
          "text-sm": size === "sm",
        })}
      >
        {sentiment && (
          <Tag
            label={sentiment}
            variant={getSentimentVariant()}
            className="capitalize"
            size="xs"
          />
        )}
        <FollowerText account={account} />
      </div>
    </div>
  );
};

export default PostDisplayTitle;

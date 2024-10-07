import React from "react";
import ElfaTooltip from "@/components/ui/compound/floating/ElfaTooltip";
import { cn } from "@/handlers/types/ui/common";
import { formatDateTime } from "@/handlers/utils/helpers/datetime";
import { formatDecimalNumberToShortForm } from "@/handlers/utils/helpers/number";
import EngagementScoreIcon from "@/public/icons/token/engagement-score.svg";
import ExternalURL from "@/public/icons/common/external.svg";

type PostDisplayFooterProps = {
  mentionedAt?: number | string;
  engagementScore?: number;
  originalUrl?: string;
};

const PostDisplayFooter = ({
  mentionedAt,
  engagementScore,
  originalUrl,
}: PostDisplayFooterProps) => {
  return (
    <div className="flex justify-between items-center mt-3 w-full">
      <div className={cn(" text-xs")}>
        {mentionedAt && (
          <span className="text-gray-700 dark:text-gray-300">
            {typeof mentionedAt === "number"
              ? formatDateTime(mentionedAt)
              : mentionedAt}
          </span>
        )}

        {engagementScore && (
          <>
            <span className="size-[0.15rem] my-auto mx-[0.3rem] align-middle bg-gray-500 rounded-full inline-block" />
            <EngagementScoreIcon className="inline-block align-top" />
            <span className="">
              <span className="font-semibold text-gray-900">
                {formatDecimalNumberToShortForm(Math.abs(engagementScore))}
              </span>
              <span className="text-gray-700">{` engagement score`}</span>
            </span>
          </>
        )}
      </div>
      {originalUrl && (
        <div className="ml-auto">
          <ElfaTooltip
            contentClassName="items-center flex ml-2"
            title="Go to original link"
            align="center"
          >
            <ExternalURL
              className="cursor-pointer"
              onClick={() => window.open(originalUrl)}
            />
          </ElfaTooltip>
        </div>
      )}
    </div>
  );
};

export default PostDisplayFooter;

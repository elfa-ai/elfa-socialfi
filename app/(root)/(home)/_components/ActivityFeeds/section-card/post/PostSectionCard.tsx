import React from "react";

import { FeedPostData } from "@/handlers/types/feed";
import SanitizedHtml from "@/components/ui/atomic/next/SanitizedHtml";

import PostMedia from "./PostMedia";
import { TweetMedia } from "@/handlers/types/post";
import PostDisplayFooter from "@/components/explore/post/_common/PostDisplayFooter";
import PostDisplayHeader from "@/components/explore/post/_common/PostDisplayHeader";

type PostSectionCardProps<T = FeedPostData> = {
  data: T[];
};

const PostSectionCard = ({ data }: PostSectionCardProps) => {
  const allMedia = data
    .flatMap((datum) => datum.post.media)
    .filter(Boolean) as TweetMedia[];

  let baseMediaIndex = 0;

  return (
    <div className="flex items-center gap-1 flex-col w-full pl-0">
      {data.map((datum, datumIndex) => {
        const Renderer = (
          <div
            className="w-full py-2 flex gap-3 flex-col cursor-pointer"
            key={JSON.stringify(datum.post.content)}
            // onClick={() => handleClickCard(datum)}
          >
            <div className="flex flex-col gap-2 md:gap-4 p-4 md:px-6 md:py-4 bg-gray-100 rounded-lg">
              {datumIndex === 0 && (
                <PostDisplayHeader account={datum.account} />
              )}
              {!!datum.post.content && (
                <div className="text-sm text-gray-900">
                  <SanitizedHtml
                    html={datum.post.content}
                    seeMoreTruncation={{
                      enabled: true,
                    }}
                  />
                </div>
              )}

              <PostMedia
                media={datum.post.media}
                allMedia={allMedia}
                account={datum.account}
                baseMediaIndex={baseMediaIndex}
              />

              <PostDisplayFooter
                mentionedAt={datum.post.mentionedAt}
                engagementScore={datum.post.engagementCount}
                originalUrl={datum.post.originalUrl}
              />
            </div>
          </div>
        );
        baseMediaIndex += datum.post.media ? datum.post.media.length : 0;

        return Renderer;
      })}
    </div>
  );
};

export default PostSectionCard;

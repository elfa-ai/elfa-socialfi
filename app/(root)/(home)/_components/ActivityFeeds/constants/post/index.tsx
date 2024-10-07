import { FeedPostData } from "@/handlers/types/feed";
import { SectionCardHeaderMapType } from "..";

import HotPostEngagement from "@/public/icons/feeds/hot-post-engagement.svg";
import PostSectionCard from "../../section-card/post/PostSectionCard";
import { formatRoundNumberToShortForm } from "@/handlers/utils/helpers/number";
import Image from "next/image";
import { SectionCardFooterProps } from "../../section-card/common/footer";
import { FE_URL } from "@/handlers/constants/route";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";

const GenericPostFeedImageRenderer = (
  postData: FeedPostData[],
  PostTypeIcon: any,
) => {
  return (
    <div className="flex items-center">
      <ElfaLink
        href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${postData[0].account.username}`}
        className="relative"
      >
        <Image
          src={postData[0].account.data.profileImageUrl}
          alt={postData[0].account.data.name}
          width={28}
          height={28}
          className="rounded-full bg-white"
        />
        <PostTypeIcon className="absolute -right-[2px] -bottom-[2px]" />
      </ElfaLink>
    </div>
  );
};

const GenericPostFooterComponentPropsFormatter = (
  postData: FeedPostData[],
): SectionCardFooterProps => {
  return {
    exploreLinkProps: {
      type: "post",
      data: postData[0].account,
    },
  };
};

export const hotPostFormatter = {
  subtitleFormatter: (data: FeedPostData[]) => {
    return (
      <div className="text-sm">
        {formatRoundNumberToShortForm(data[0].post.numSmartAccounts)}{" "}
        <span className="text-gray-700">smart accounts engagement (4h)</span>
      </div>
    );
  },
  titleFormatter: (_: FeedPostData[]) => {
    return `Trending Post`;
  },
  IconDisplayFormatter: (data: FeedPostData[]) => {
    return GenericPostFeedImageRenderer(data, HotPostEngagement);
  },
  FooterComponentPropsFormatter: GenericPostFooterComponentPropsFormatter,
};

export const SECTION_CARD_HEADER_POST_DATA: Pick<
  SectionCardHeaderMapType,
  "post"
> = {
  post: {
    "hot-post-engagement": {
      RendererComponent: PostSectionCard,
      ModalComponent: null,
      titleTooltip:
        "High engagement usually shows where public attention is most focused. This post could offer timely insights, or signal a change in market mood.",
      ...hotPostFormatter,
    },
  },
};

import TrendingBullish from "@/public/icons/feeds/trending-bullish.svg";
import TrendingBearish from "@/public/icons/feeds/trending-bearish.svg";
import TrendingBullishReversal from "@/public/icons/feeds/trending-bullish-reversal.svg";
import TrendingBearishReversal from "@/public/icons/feeds/trending-bearish-reversal.svg";

import TokenSectionCard from "../../section-card/token/TokenSectionCard";
import { FeedTokenData } from "@/handlers/types/feed";

import { SectionCardHeaderMapType } from "..";
import Image from "next/image";
import TokenSubtitleNumberDisplay from "../../section-card/token/components/TokenSubtitleNumberDisplay";
import { SectionCardFooterProps } from "../../section-card/common/footer";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import { FE_URL } from "@/handlers/constants/route";

const GenericTokenFeedImageRenderer = (
  tokenData: FeedTokenData[],
  TokenTypeIcon: any,
) => {
  return (
    <div className="flex items-center">
      <ElfaLink
        href={`${FE_URL.EXPLORE_TOKEN}/${tokenData[0].overview.token.slug}`}
        className="relative"
      >
        <Image
          src={tokenData[0].overview.token.data.image}
          alt={tokenData[0].overview.token.name}
          width={28}
          height={28}
          className="rounded-full bg-white"
        />
        <TokenTypeIcon className="absolute -right-[2px] -bottom-[2px]" />
      </ElfaLink>
    </div>
  );
};

const GenericTokenFeedSubtitleRenderer = (tokenData: FeedTokenData[]) => {
  const { price, mention } = tokenData?.[0]?.overview;

  return (
    <div className="flex items-center">
      <TokenSubtitleNumberDisplay
        price={price}
        mention={mention}
        mentionedBy={tokenData?.[0]?.mentionedBy}
        timeInformation="1d"
      />
    </div>
  );
};

const GenericTokenFooterComponentPropsFormatter = (
  tokenData: FeedTokenData[],
): SectionCardFooterProps => {
  return {
    exploreLinkProps: {
      data: tokenData[0].overview.token,
      type: "token",
    },
    // shareCallback: '',
    // swapCallback: ''
  };
};

const TokenNameWithLink = (tokenData: FeedTokenData[]) => {
  return (
    <ElfaLink
      href={`${FE_URL.EXPLORE_TOKEN}/${tokenData?.[0]?.overview?.token.slug}`}
    >
      {tokenData?.[0]?.overview?.token?.name ?? "Token"}
    </ElfaLink>
  );
};

export const uptrendingTokenFormatter = {
  titleFormatter: (tokenData: FeedTokenData[]) => {
    return <>{TokenNameWithLink(tokenData)} is Gaining Popularity</>;
  },
  subtitleFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedSubtitleRenderer(tokenData);
  },
  IconDisplayFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedImageRenderer(tokenData, TrendingBullish);
  },
  FooterComponentPropsFormatter: GenericTokenFooterComponentPropsFormatter,
};

export const downtrendingTokenFormatter = {
  titleFormatter: (tokenData: FeedTokenData[]) => {
    return <>{TokenNameWithLink(tokenData)} is Losing Popularity</>;
  },
  subtitleFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedSubtitleRenderer(tokenData);
  },
  IconDisplayFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedImageRenderer(tokenData, TrendingBearish);
  },
  FooterComponentPropsFormatter: GenericTokenFooterComponentPropsFormatter,
};

export const bullishReversalTokenFormatter = {
  titleFormatter: (tokenData: FeedTokenData[]) => {
    return `${tokenData?.[0]?.overview?.token?.name ?? "Token"} Turned Bullish`;
  },
  subtitleFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedSubtitleRenderer(tokenData);
  },
  IconDisplayFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedImageRenderer(tokenData, TrendingBullishReversal);
  },
  FooterComponentPropsFormatter: GenericTokenFooterComponentPropsFormatter,
};

export const bearishReversalTokenFormatter = {
  titleFormatter: (tokenData: FeedTokenData[]) => {
    return `${tokenData?.[0]?.overview?.token?.name ?? "Token"} Turned Bearish`;
  },
  subtitleFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedSubtitleRenderer(tokenData);
  },
  IconDisplayFormatter: (tokenData: FeedTokenData[]) => {
    return GenericTokenFeedImageRenderer(tokenData, TrendingBearishReversal);
  },
  FooterComponentPropsFormatter: GenericTokenFooterComponentPropsFormatter,
};

export const SECTION_CARD_HEADER_TOKEN_DATA: Pick<
  SectionCardHeaderMapType,
  "token"
> = {
  token: {
    bullish: {
      RendererComponent: TokenSectionCard,
      ModalComponent: null,
      titleTooltip:
        "Rising interest usually leads to bigger price swings. These tokens may offer opportunities for short-term trading.",
      ...uptrendingTokenFormatter,
    },

    bearish: {
      RendererComponent: TokenSectionCard,
      ModalComponent: null,
      titleTooltip:
        "Falling interest could be a warning sign and signals the need for caution. These tokens tend to be riskier, but may present unique opportunities for bold traders.",
      ...downtrendingTokenFormatter,
    },
    "bullish-reversal": {
      RendererComponent: TokenSectionCard,
      ModalComponent: null,
      titleTooltip:
        "A shift from bearish to bullish sentiment could signal a potential recovery, opening up buying opportunities for traders",
      ...bullishReversalTokenFormatter,
    },
    "bearish-reversal": {
      RendererComponent: TokenSectionCard,
      ModalComponent: null,
      titleTooltip:
        "A shift in sentiment from bullish to bearish suggests it’s time to reconsider your positions, as the community might be gearing up for a downturn.",
      ...bearishReversalTokenFormatter,
    },
  },
};

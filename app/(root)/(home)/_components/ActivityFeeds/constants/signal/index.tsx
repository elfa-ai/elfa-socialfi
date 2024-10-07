import { FeedSignalData } from "@/handlers/types/feed";
import { SectionCardHeaderMapType } from "..";

import HotSignalEngagement from "@/public/icons/feeds/hot-post-engagement.svg";
import Image from "next/image";
import { SectionCardFooterProps } from "../../section-card/common/footer";
import { FE_URL } from "@/handlers/constants/route";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import SignalSectionCard from "../../section-card/signal/SignalSectionCard";
import SignalSubtitleNumberDisplay from "../../section-card/signal/SignalSubtitleNumberDisplay";

const GenericSignalFeedImageRenderer = (
  SignalData: FeedSignalData[],
  SignalTypeIcon: any,
) => {
  return (
    <div className="flex items-center">
      <ElfaLink
        href={`${FE_URL.EXPLORE_TOKEN}/${SignalData[0].overview.token.slug}`}
        className="relative"
      >
        <Image
          src={SignalData[0].overview.token.data.image}
          alt={SignalData[0].overview.token.name}
          width={28}
          height={28}
          className="rounded-full bg-white"
        />
        <SignalTypeIcon className="absolute -right-[2px] -bottom-[2px]" />
      </ElfaLink>
    </div>
  );
};

const GenericSignalFooterComponentPropsFormatter = (
  SignalData: FeedSignalData[],
): SectionCardFooterProps => {
  return {
    exploreLinkProps: {
      type: "signal",
      data: SignalData[0].overview.token,
    },
  };
};

export const hotSignalFormatter = {
  subtitleFormatter: (data: FeedSignalData[]) => {
    return (
      <div className="flex items-center">
        <SignalSubtitleNumberDisplay
          price={data[0].overview.price}
          mention={data[0].overview.mention}
          timeInformation="1d"
        />
      </div>
    );
  },
  titleFormatter: (data: FeedSignalData[]) => {
    return `${data[0].overview.token.name} received multiple signals`;
  },
  IconDisplayFormatter: (data: FeedSignalData[]) => {
    return GenericSignalFeedImageRenderer(data, HotSignalEngagement);
  },
  FooterComponentPropsFormatter: GenericSignalFooterComponentPropsFormatter,
};

export const SECTION_CARD_HEADER_SIGNAL_DATA: Pick<
  SectionCardHeaderMapType,
  "signal"
> = {
  signal: {
    signal: {
      RendererComponent: SignalSectionCard,
      ModalComponent: null,
      titleTooltip:
        "High engagement usually shows where public attention is most focused. This Signal could offer timely insights, or signal a change in market mood.",
      ...hotSignalFormatter,
    },
  },
};

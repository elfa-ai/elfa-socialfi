import React from "react";

import { SectionCardTitle } from "./common/title";

import { FeedCategory } from "@/handlers/types/feed";
import { getSectionCardHeader } from "../constants";

import { SectionCardFooter } from "./common/footer";

type SectionCardProps = {
  cardData: FeedCategory;
};

const SectionCard = ({ cardData }: SectionCardProps) => {
  const { type, category, data, timestamp, ownerName, ownerPict } = cardData;

  const {
    titleFormatter,
    subtitleFormatter,
    IconDisplayFormatter,
    RendererComponent,

    FooterComponentPropsFormatter,
  } = getSectionCardHeader(type, category);

  const titleComponentProps = {
    Icon: IconDisplayFormatter(data),
    timestamp,
    title: titleFormatter(data),
    subtitle: subtitleFormatter(data),
  };

  const footerProps = FooterComponentPropsFormatter(data);

  return (
    <div className="py-4 md:p-6 flex flex-col gap-2 md:gap-2">
      <SectionCardTitle
        {...titleComponentProps}
        ownerName={ownerName}
        ownerPict={ownerPict}
      />
      <RendererComponent data={data} />

      <SectionCardFooter {...footerProps} />
    </div>
  );
};

export default SectionCard;

import React from "react";

// eslint-disable-next-line import/extensions
import activityFeedData from "@/handlers/constants/mock/activityFeed.json";
import { getSectionCardHeader } from "../../constants";
import { SectionCardTitleSelf } from "../common/title-self";
import Image from "next/image";
import { SectionCardFooter } from "../common/footer";

const SelfPost = () => {
  const { type, category, data, timestamp, ownerName, ownerPict } =
    activityFeedData.data.find(
      (datum) => datum.ownerName === "Super user" && datum.type === "signal",
    ) as any;

  const {
    titleFormatter,
    subtitleFormatter,
    RendererComponent,

    FooterComponentPropsFormatter,
  } = getSectionCardHeader(type, category);

  const titleComponentProps = {
    Icon: <Image src="/user/1.png" width={28} height={28} alt="" />,
    timestamp,
    title: titleFormatter(data),
    subtitle: subtitleFormatter(data),
  };
  const footerProps = FooterComponentPropsFormatter(data);

  return (
    <div className="py-4 md:p-6 flex flex-col gap-2 md:gap-2">
      <SectionCardTitleSelf
        {...titleComponentProps}
        ownerName={ownerName}
        ownerPict={ownerPict}
        data={data}
      />

      <RendererComponent data={data} />

      <SectionCardFooter {...footerProps} />
    </div>
  );
};

export default SelfPost;

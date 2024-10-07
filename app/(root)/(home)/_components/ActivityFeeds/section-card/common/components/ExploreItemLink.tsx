import ElfaTooltip from "@/components/ui/compound/floating/ElfaTooltip";
import { FE_URL } from "@/handlers/constants/route";
import usePush from "@/handlers/hooks/route/usePush";
import { TokenMetadata } from "@/handlers/types/token";
import { FaChevronRight } from "@react-icons/all-files/fa6/FaChevronRight";
import Image from "next/image";
import React from "react";

export type ExploreItemLinkProps =
  | { type: "token"; data: TokenMetadata }
  | { type: "post"; data: any }
  | { type: "signal"; data: TokenMetadata };

const ExploreItemLink = ({ type, data }: ExploreItemLinkProps) => {
  const push = usePush();

  const getTargetData = () => {
    if (type === "token")
      return {
        link: `${FE_URL.EXPLORE_TOKEN}/${data.slug}`,
        image: data.data.image,
        name: data.name,
      };
    if (type === "post")
      return {
        link: `${FE_URL.EXPLORE_SMART_ACCOUNT}/${data.username}`,
        image: data.data.profileImageUrl,
        name: data.data.name,
      };

    return {
      link: `${FE_URL.EXPLORE_SMART_ACCOUNT}/${data.data.image}`,
      image: data.data.image,
      name: data.name,
    };
  };

  const { link, image, name } = getTargetData();

  const getLabel = () => {
    if (type === "token") return `Explore ${name}`;
    if (type === "post") return `${name}`;
    if (type === "signal") return `View ${name}`;
  };

  return (
    <div
      onClick={() => push(link)}
      className="w-full flex items-center gap-1 cursor-pointer"
    >
      <Image
        alt={name}
        className="rounded-full bg-white"
        src={image}
        width={16}
        height={16}
      />

      <ElfaTooltip title={`Go to token page`} contentClassName="w-fit">
        <div className="flex gap-1 items-center hover:underline hover:underline-offset-2 hover:decoration-gray-500">
          <div className="text-gray-700 ">{getLabel()}</div>
          <div>
            <FaChevronRight className="size-3 text-gray-700" />
          </div>
        </div>
      </ElfaTooltip>
    </div>
  );
};

export default ExploreItemLink;

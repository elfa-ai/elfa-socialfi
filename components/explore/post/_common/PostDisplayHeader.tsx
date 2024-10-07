import { FE_URL } from "@/handlers/constants/route";
import { TokenMetadata } from "@/handlers/types/token";

import Image from "next/image";
import React from "react";
import PostDisplayTitle from "./PostDisplayTitle";
import { cn } from "@/handlers/types/ui/common";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";

type PostDisplayHeaderProps = {
  account: any;
  activeToken?: TokenMetadata;
  sentiment?: any;
  allowHeaderRedirect?: boolean;
  size?: "sm" | "base";
};

const PostDisplayHeader = ({
  account,
  activeToken,
  sentiment,
  // allowHeaderRedirect = true
  size = "base",
}: PostDisplayHeaderProps) => {
  // const push = usePush();

  return (
    <div
      className={cn("flex justify-start items-center gap-2", {
        // 'cursor-auto': !allowHeaderRedirect
      })}
    >
      <div>
        <ElfaLink href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${account.username}`}>
          <Image
            src={account.data.profileImageUrl}
            width={size === "base" ? 40 : 28}
            height={size === "base" ? 40 : 28}
            alt={account.data.name}
            className="bg-white rounded-full"
          />
        </ElfaLink>
      </div>
      {/* <div className="text-left">
        <div className="font-semibold text-gray-900">{account.data.name}</div>
        <div className=" text-gray-700">
          {`${formatRoundNumberToShortForm(account.followerCount)} followers`}
        </div>
      </div> */}
      <PostDisplayTitle
        account={account}
        activeToken={activeToken}
        sentiment={sentiment}
        size={size}
      />
    </div>
  );
};

export default PostDisplayHeader;

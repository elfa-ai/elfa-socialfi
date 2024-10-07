import React from "react";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import { FE_URL } from "@/handlers/constants/route";

import { cn } from "@/handlers/types/ui/common";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type PFPProps = {
  account: any;
  shouldHaveAction?: boolean;
  size?: `size-${number}`;
};

const PFP = ({
  account,
  shouldHaveAction = true,
  size = "size-5",
}: PFPProps) => {
  const CoreElement = (
    <Avatar
      key={account.username}
      className={cn("-ml-2 duration-300 h-fit w-fit", {
        "cursor-pointer hover:z-10 hover:scale-110": shouldHaveAction,
      })}
    >
      <AvatarImage
        alt={account.username}
        src={account.data.profileImageUrl}
        className={cn("bg-white rounded-full", size)}
        title={account.username}
      />
      {/* <AvatarFallback>
  <AvatarNameImage
    className="size-5 md:size-7"
    fullName={account.data.name ?? 'E F'}
  />
</AvatarFallback> */}
    </Avatar>
  );

  if (shouldHaveAction)
    return (
      <ElfaLink href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${account.username}`}>
        {CoreElement}
      </ElfaLink>
    );

  return <>{CoreElement}</>;
};

export default PFP;

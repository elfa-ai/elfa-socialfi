import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import { FE_URL } from "@/handlers/constants/route";
import { MARKETPLACE_USERS } from "@/handlers/constants/temp";
import usePush from "@/handlers/hooks/route/usePush";
import { cn } from "@/handlers/types/ui/common";
import Image from "next/image";
import React, { useState } from "react";

const UserGood = ({ datum, index }: any) => {
  const push = usePush();
  const [isHovered, setIsHovered] = useState(false);

  const isAccessPassed =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("accessPass") ?? "false");
  const isPurchased = isAccessPassed && index === 0;

  return (
    <div
      className="border border-gray-300 rounded p-3"
      onClick={() => push(`/find/detail/${datum.username}`)}
    >
      <div className="flex justify-between">
        <div className={cn("flex justify-start items-center gap-2")}>
          <div>
            <ElfaLink href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${datum.name}`}>
              <Image
                src={datum.image}
                width={28}
                height={28}
                alt={datum.name}
                className="bg-white rounded-full"
              />
            </ElfaLink>
          </div>
          <div>
            <div className="flex flex-auto gap-[0.25rem] items-center">
              <ElfaLink
                href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${datum.name}`}
                className={cn(
                  "overflow-hidden text-ellipsis dark:text-gray-200 text-gray-900 break-all",
                  { "h-[20px] text-sm ": true },
                )}
              >
                {datum.name}
              </ElfaLink>
            </div>
            <div
              className={cn("text-gray-700 flex items-center gap-2", {
                "text-sm": true,
              })}
            >
              {datum.smartFollowerCount} smart followers
            </div>
          </div>
        </div>

        <div className="h-full">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isPurchased) return;
              push("/find/congrats");
            }}
            className={cn(
              "text-gray-900 text-xs w-[82px] py-2 text-center rounded-lg",
              {
                "bg-purple-500": isHovered,
                "bg-gray-200": !isHovered,
                "!bg-opacity-20 !bg-gray-100 cursor-auto": isPurchased,
              },
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isPurchased
              ? "Purchased"
              : isHovered
                ? "Buy"
                : `${datum.price} $LFA`}
          </button>
        </div>
      </div>
      <div className="my-2 text-sm">{datum.content}</div>
    </div>
  );
};

const UsersToFind = () => {
  return (
    <div className="flex flex-col gap-3">
      {MARKETPLACE_USERS.map((datum, index) => (
        <UserGood datum={datum} key={datum.name} index={index} />
      ))}
    </div>
  );
};

export default UsersToFind;

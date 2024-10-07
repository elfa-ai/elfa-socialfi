import React, { useCallback, useEffect, useState } from "react";

import { cn } from "@/handlers/types/ui/common";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import usePush from "@/handlers/hooks/route/usePush";

const SELF_USER = {
  profileImg: "/user/profile.png",
  profileName: "Tristan",
  notification: 0,
};

const ACCESS_PASS_USER = {
  profileImg: "/user/11.png",
  profileName: "Tsuki.eth",
  notification: 2,
};

const ActivityFeedDailySummary = ({ currentView, setCurrentView }: any) => {
  const [allUserFeeds, setAllUserFeeds] = useState([SELF_USER]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAccessPassPurchased = JSON.parse(
        window.localStorage.getItem("accessPass") ?? "false",
      );
      if (isAccessPassPurchased) setAllUserFeeds([SELF_USER, ACCESS_PASS_USER]);
    }
  }, []);

  const push = usePush();
  const shouldOpac = useCallback(
    (profileName: string) => {
      if (!currentView) return 0;
      return currentView !== profileName;
    },
    [currentView],
  );

  return (
    <>
      <div className="py-2">
        <div className="text-gray-900 mb-1 flex items-center gap-2">
          {allUserFeeds.map(({ profileImg, profileName, notification }) => (
            <div key={profileName} className="relative">
              <div
                className={cn(
                  "w-10 h-10 rounded-lg border border-pink-500 flex items-center justify-center overflow-hidden",
                )}
              >
                <Avatar
                  className={cn(
                    "rounded-lg transition-transform duration-200 hover:scale-105",
                    { "cursor-pointer hover:z-10": true },
                    {
                      "opacity-70": shouldOpac(profileName),
                    },
                  )}
                  onClick={() => setCurrentView(profileName)}
                >
                  <AvatarImage src={profileImg} alt={profileName} />
                </Avatar>
              </div>
              {!!notification && (
                <div className="z-[40] overflow-unset absolute top-[-4px] right-[-4px] size-5 rounded-full bg-pink-500 text-white shadow-md">
                  <div className="text-xs flex items-center h-full justify-center">
                    {notification}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            aria-label="fe"
            className={cn(
              "w-10 h-10 rounded-lg border border-pink-500 bg-opacity-50 hover:bg-opacity-100 flex items-center justify-center overflow-hidden",
              { "cursor-pointer": true },
            )}
            onClick={() => push("/find")}
          >
            <FaPlus
              className={cn(
                "fill-pink-500 size-fit",
                "hover:z-10 hover:scale-105",
              )}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityFeedDailySummary;

{
  /* <div className="w-[12rem] flex items-center gap-3">
          <Button
            type="button"
            variant="icon"
            size="icon"
            className="rounded-full"
          >
            <X1 />
          </Button>
          <Button
            type="button"
            variant="icon"
            size="icon"
            className="rounded-full"
          >
            <X1 />
          </Button>
          <Button
            type="button"
            variant="icon"
            size="icon"
            className="rounded-full"
          >
            <X1 />
          </Button>
          <Button
            type="button"
            variant="icon"
            size="icon"
            className="rounded-full"
          >
            <X1 />
          </Button>
        </div> */
}

{
  /* <div className={cn("mt-1", { invisible: !isAtTop })}>
          <Searchbar />
        </div> */
}
{
  /* <div className="flex justify-start items-center mt-4 gap-3">
          <ElfaLink href={FE_URL.EXPLORE_TOKEN}>
            <Button
              variant="tertiary"
              className="border-2 font-semibold h-10 px-4 py-2 text-sm"
            >
              <FaHatCowboy className="mr-2 size-5" />
              Explore
            </Button>
          </ElfaLink>

          <Button
            variant="tertiary"
            className="border-2 font-semibold h-10 px-4 py-2 text-sm"
          >
            <FaBell className="mr-2 size-4" />
            Manage Alerts
          </Button>
        </div> */
}

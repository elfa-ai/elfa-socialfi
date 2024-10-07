"use client";

import React from "react";

import { Input } from "@/components/ui/input";

import { cn } from "@/handlers/types/ui/common";

import Navbar from "@/components/layout/Navbar";
import FullWidthContainer from "@/components/ui/atomic/layout/FullWidthContainer";
import Image from "next/image";
import ChipTab from "@/components/ui/atomic/tab/ChipTab";
import useTabState from "@/handlers/hooks/element/useTabState";
import UsersToFind from "./UsersToFind";

import Tempy from "./_components/Tempy";

const Buy = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H15.5C16.163 4 16.7989 4.26339 17.2678 4.73223C17.7366 5.20107 18 5.83696 18 6.5V13.5C18 14.163 17.7366 14.7989 17.2678 15.2678C16.7989 15.7366 16.163 16 15.5 16H4.5C3.83696 16 3.20107 15.7366 2.73223 15.2678C2.26339 14.7989 2 14.163 2 13.5V6.5ZM9.5 6H4.5C4.36739 6 4.24021 6.05268 4.14645 6.14645C4.05268 6.24021 4 6.36739 4 6.5C4 6.63261 4.05268 6.75979 4.14645 6.85355C4.24021 6.94732 4.36739 7 4.5 7H9.5C9.63261 7 9.75979 6.94732 9.85355 6.85355C9.94732 6.75979 10 6.63261 10 6.5C10 6.36739 9.94732 6.24021 9.85355 6.14645C9.75979 6.05268 9.63261 6 9.5 6ZM12.5 8H4.5C4.36739 8 4.24021 8.05268 4.14645 8.14645C4.05268 8.24021 4 8.36739 4 8.5C4 8.63261 4.05268 8.75979 4.14645 8.85355C4.24021 8.94732 4.36739 9 4.5 9H12.5C12.6326 9 12.7598 8.94732 12.8536 8.85355C12.9473 8.75979 13 8.63261 13 8.5C13 8.36739 12.9473 8.24021 12.8536 8.14645C12.7598 8.05268 12.6326 8 12.5 8ZM5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12V13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14H9C9.26522 14 9.51957 13.8946 9.70711 13.7071C9.89464 13.5196 10 13.2652 10 13V12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11H5Z"
      fill="#902BD4"
    />
  </svg>
);

const Create = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.834 15.1663H5.83398V12.833H12.834V5.83301H15.1673V12.833H22.1673V15.1663H15.1673V22.1663H12.834V15.1663Z"
      fill="#902BD4"
    />
  </svg>
);

const Swap = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.66667 10.4997H19.8333L17.9667 11.8997C17.8441 11.9917 17.7408 12.1068 17.6628 12.2387C17.5847 12.3705 17.5334 12.5164 17.5117 12.6681C17.4901 12.8197 17.4985 12.9742 17.5365 13.1226C17.5745 13.271 17.6414 13.4105 17.7333 13.5331C17.842 13.678 17.9829 13.7956 18.1449 13.8766C18.3069 13.9576 18.4855 13.9997 18.6667 13.9997C18.9191 13.9997 19.1647 13.9179 19.3667 13.7664L24.0333 10.2664C24.176 10.1575 24.2917 10.0172 24.3713 9.85632C24.4509 9.69545 24.4923 9.51839 24.4923 9.3389C24.4923 9.15941 24.4509 8.98235 24.3713 8.82148C24.2917 8.66061 24.176 8.52028 24.0333 8.4114L19.53 4.9114C19.2856 4.72111 18.9755 4.63571 18.6681 4.674C18.3607 4.71229 18.0811 4.87112 17.8908 5.11557C17.7005 5.36001 17.6151 5.67003 17.6534 5.97743C17.6917 6.28484 17.8506 6.56444 18.095 6.75473L19.9267 8.1664H4.66667C4.35725 8.1664 4.0605 8.28932 3.84171 8.50811C3.62292 8.7269 3.5 9.02365 3.5 9.33307C3.5 9.64248 3.62292 9.93923 3.84171 10.158C4.0605 10.3768 4.35725 10.4997 4.66667 10.4997ZM23.3333 18.6664H8.16667L10.0333 17.2664C10.2809 17.0807 10.4445 16.8044 10.4883 16.4981C10.532 16.1917 10.4523 15.8806 10.2667 15.6331C10.081 15.3855 9.80463 15.2219 9.49832 15.1781C9.19202 15.1344 8.88087 15.2141 8.63333 15.3997L3.96667 18.8997C3.82398 19.0086 3.70833 19.1489 3.62873 19.3098C3.54912 19.4707 3.50771 19.6477 3.50771 19.8272C3.50771 20.0067 3.54912 20.1838 3.62873 20.3447C3.70833 20.5055 3.82398 20.6459 3.96667 20.7547L8.47 24.2547C8.67364 24.4128 8.92389 24.4989 9.18167 24.4997C9.35984 24.4993 9.53554 24.4581 9.69531 24.3792C9.85507 24.3003 9.99465 24.1859 10.1033 24.0447C10.2928 23.8015 10.3783 23.4932 10.3411 23.1872C10.304 22.8811 10.1472 22.6022 9.905 22.4114L8.07333 20.9997H23.3333C23.6428 20.9997 23.9395 20.8768 24.1583 20.658C24.3771 20.4392 24.5 20.1425 24.5 19.8331C24.5 19.5236 24.3771 19.2269 24.1583 19.0081C23.9395 18.7893 23.6428 18.6664 23.3333 18.6664Z"
      fill="#902BD4"
    />
  </svg>
);

const Manage = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.125 6.125V11.375C13.125 11.8391 12.9406 12.2842 12.6124 12.6124C12.2842 12.9406 11.8391 13.125 11.375 13.125H6.125C5.66087 13.125 5.21575 12.9406 4.88756 12.6124C4.55937 12.2842 4.375 11.8391 4.375 11.375V6.125C4.375 5.66087 4.55937 5.21575 4.88756 4.88756C5.21575 4.55937 5.66087 4.375 6.125 4.375H11.375C11.8391 4.375 12.2842 4.55937 12.6124 4.88756C12.9406 5.21575 13.125 5.66087 13.125 6.125ZM21.875 4.375H16.625C16.1609 4.375 15.7158 4.55937 15.3876 4.88756C15.0594 5.21575 14.875 5.66087 14.875 6.125V11.375C14.875 11.8391 15.0594 12.2842 15.3876 12.6124C15.7158 12.9406 16.1609 13.125 16.625 13.125H21.875C22.3391 13.125 22.7842 12.9406 23.1124 12.6124C23.4406 12.2842 23.625 11.8391 23.625 11.375V6.125C23.625 5.66087 23.4406 5.21575 23.1124 4.88756C22.7842 4.55937 22.3391 4.375 21.875 4.375ZM11.375 14.875H6.125C5.66087 14.875 5.21575 15.0594 4.88756 15.3876C4.55937 15.7158 4.375 16.1609 4.375 16.625V21.875C4.375 22.3391 4.55937 22.7842 4.88756 23.1124C5.21575 23.4406 5.66087 23.625 6.125 23.625H11.375C11.8391 23.625 12.2842 23.4406 12.6124 23.1124C12.9406 22.7842 13.125 22.3391 13.125 21.875V16.625C13.125 16.1609 12.9406 15.7158 12.6124 15.3876C12.2842 15.0594 11.8391 14.875 11.375 14.875ZM21.875 14.875H16.625C16.1609 14.875 15.7158 15.0594 15.3876 15.3876C15.0594 15.7158 14.875 16.1609 14.875 16.625V21.875C14.875 22.3391 15.0594 22.7842 15.3876 23.1124C15.7158 23.4406 16.1609 23.625 16.625 23.625H21.875C22.3391 23.625 22.7842 23.4406 23.1124 23.1124C23.4406 22.7842 23.625 22.3391 23.625 21.875V16.625C23.625 16.1609 23.4406 15.7158 23.1124 15.3876C22.7842 15.0594 22.3391 14.875 21.875 14.875Z"
      fill="#902BD4"
    />
  </svg>
);

const FEED_SETTINGS_TAB_CONTENT = [
  { label: "All", key: "all" },
  { label: "Traders", key: "traders" },
  { label: "Researchers", key: "researchers" },
  { label: "Venture Capitalist", key: "vc" },
  { label: "Politicians", key: "pc" },
];

const Referral = () => {
  const activityFeedTabState = useTabState<string>("all");

  return (
    <>
      <Navbar />
      <div className="mt-[72px]" />

      <div className="mt-4 md:mt-0" />

      <main className="text-gray-900">
        <FullWidthContainer>
          <div className="w-[140px] h-[105px] mx-auto relative">
            <Image
              src="/user/temp.png"
              height={84}
              width={84}
              alt="fgr"
              className="absolute top-0 left-0"
            />
            <Image
              src="/user/temp1.png"
              height={84}
              width={84}
              alt="fgr"
              className="absolute bottom-0 right-0"
            />
          </div>
          <Tempy />

          <div className="flex items-center justify-center gap-6">
            {[
              { Icon: Buy, text: "Buy" },
              { Icon: Create, text: "Create" },
              { Icon: Manage, text: "Manage" },
              { Icon: Swap, text: "Swap" },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                className="flex flex-col gap-2 items-center cursor-pointer hover:scale-105"
              >
                <div className="size-12 flex items-center justify-center rounded-full bg-pink-500 bg-opacity-10">
                  {Icon}
                </div>
                <div className="text-sm">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="relative w-full h-full">
              <Image
                src="/brand_assets/search-icon.svg"
                width={19}
                height={19}
                alt="search-icon"
                className="absolute top-[50%] translate-y-[-50%] left-4"
              />
              <Input
                placeholder={"Traders, KOLs, researchers and more.."}
                className={cn(
                  "h-10 bg-gray-100 focus-visible:ring-0 placeholder:text-sm text-gray-900 placeholder:text-gray-700 w-full lg:w-[420px] py-2 pl-12 pr-6",
                  {
                    "border-gray-300 border-none rounded-full": true,
                  },
                )}
              />
            </label>
          </div>

          <div className="mt-4 overflow-x-auto no-scrollbar">
            <ChipTab
              contents={FEED_SETTINGS_TAB_CONTENT}
              {...activityFeedTabState}
            />
          </div>

          <div className="mt-5">
            <UsersToFind />
          </div>
        </FullWidthContainer>
      </main>
    </>
  );
};

export default Referral;

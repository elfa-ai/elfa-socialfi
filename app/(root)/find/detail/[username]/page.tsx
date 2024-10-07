"use client";

import React from "react";

import { cn } from "@/handlers/types/ui/common";

import Navbar from "@/components/layout/Navbar";
import FullWidthContainer from "@/components/ui/atomic/layout/FullWidthContainer";

import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import { FE_URL } from "@/handlers/constants/route";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import usePush from "@/handlers/hooks/route/usePush";
import Example from "./chart";

const MAP_DATA = {
  "tsuki.eth405": {
    name: "Tsuki.eth",
    profileImg: "/user/11.png",
    smartFollowerCount: 1004,
    username: "tsuki.eth405",
    post: 36,
    lastActive: "30th Sept",
    chart: {
      lfa: 402,
      increase: 4.96,
    },
  },
};

const Referral = ({
  params,
}: {
  params: { username: keyof typeof MAP_DATA };
}) => {
  const datum = MAP_DATA[params.username];

  const push = usePush();

  return (
    <>
      <Navbar />
      <div className="mt-[72px]" />

      <div className="mt-4 md:mt-0" />

      <main className="text-gray-900">
        <FullWidthContainer>
          <div className="flex justify-between">
            <div className={cn("flex justify-start items-center gap-2")}>
              <div>
                <ElfaLink
                  href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${datum.name}`}
                >
                  <div className="relative">
                    <div className="size-[60px] rounded-lg border border-pink-500 flex items-center justify-center overflow-hidden">
                      <Avatar
                        className={cn(
                          "rounded-lg transition-transform duration-200 hover:scale-105 size-[60px]",
                          { "cursor-pointer hover:z-10": true },
                        )}
                      >
                        <AvatarImage src={datum.profileImg} alt={datum.name} />
                      </Avatar>
                    </div>
                  </div>
                </ElfaLink>
              </div>
              <div>
                <div className="flex flex-auto text-sm gap-[0.25rem] items-center">
                  <div className="flex gap-2">
                    <ElfaLink
                      href={`${FE_URL.EXPLORE_SMART_ACCOUNT}/${datum.name}`}
                      className={cn(
                        "overflow-hidden text-ellipsis text-gray-900 break-all",
                        { "text-sm ": true },
                      )}
                    >
                      {datum.name}
                    </ElfaLink>
                    <div className="text-gray-700">@{datum.username}</div>
                    <div className="rounded py-[0.1rem] px-1 bg-pink-100 bg-opacity-10 text-pink-500">
                      Smart account
                    </div>
                  </div>
                </div>
                <div
                  className={cn("text-gray-700 flex items-center gap-2", {
                    "text-sm": true,
                  })}
                >
                  {datum.smartFollowerCount} smart followers
                </div>

                <div className="flex gap-1 text-xs text-gray-900">
                  <div className="text-gray-900">{datum.post} posts</div>
                  <span className="size-[0.15rem] my-auto mx-[0.3rem] align-middle bg-gray-900 rounded-full inline-block" />
                  <div className="text-gray-900">
                    Last active {datum.lastActive}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullWidthContainer>

        <Example metadata={datum.chart} />

        <FullWidthContainer>
          <div className="mt-6">
            <div className="text-base text-gray-900 mb-2">Description</div>
            <div className="text-xs mb-4 text-gray-700">
              Sharing my investment frameworks, research process and fundamental
              / data driven approach to crypto
            </div>

            <div className="border rounded border-gray-300 text-gray-900 p-3">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.727 11.8304L4.366 6.81622C4.41199 6.4555 4.53346 6.10794 4.72283 5.79525C4.91219 5.48257 5.16539 5.21149 5.46658 4.99895C5.76778 4.78641 6.11051 4.63697 6.47335 4.55998C6.8362 4.48298 7.21136 4.48009 7.5754 4.55147C8.3467 4.70304 9.2116 5.00971 10 5.00971C10.7884 5.00971 11.6533 4.70304 12.4246 4.55147C12.7886 4.48022 13.1636 4.48322 13.5264 4.56028C13.8891 4.63734 14.2317 4.7868 14.5328 4.99933C14.8339 5.21186 15.087 5.48289 15.2763 5.7955C15.4657 6.10811 15.5871 6.45559 15.6331 6.81622L16.2739 11.8304C17.2963 12.0807 19 12.5653 19 13.8563C19 15.2628 17.0083 15.7263 15.922 15.9625C14.3758 16.2991 12.2824 16.5 10 16.5C7.7176 16.5 5.6242 16.2991 4.078 15.9625C2.9908 15.7263 1 15.2628 1 13.8563C1 12.5653 2.7037 12.0807 3.727 11.8304ZM4.4677 14.2423C3.9052 14.1198 3.4687 13.9867 3.1582 13.8563C3.4687 13.7259 3.9052 13.592 4.4677 13.4703C5.8519 13.169 7.8085 12.9751 10 12.9751C12.1915 12.9751 14.1481 13.169 15.5323 13.4703C16.0948 13.5928 16.5313 13.7259 16.8418 13.8563C16.5322 13.9867 16.0948 14.1198 15.5323 14.2423C14.1481 14.5437 12.1915 14.7375 10 14.7375C7.8085 14.7375 5.8519 14.5437 4.4677 14.2423Z"
                    fill="white"
                  />
                </svg>
                <div className="">Get room access to tsuki’s signals</div>
              </div>

              <ul className="flex flex-col gap-2">
                {[
                  "Get access to tsuki’s signals",
                  "Swap to earn",
                  "Latest posts directly on elfa",
                ].map((stringy, index) => (
                  <li key={stringy} className="flex items-center gap-2">
                    <div className="bg-pink-100 bg-opacity-10 text-purple-500 size-6 text-center rounded">
                      {index + 1}
                    </div>
                    <div className="text-xs">{stringy}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  className="w-full h-9"
                  variant="primary"
                  size="lg"
                  onClick={() => push("/find/congrats")}
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </FullWidthContainer>
      </main>
    </>
  );
};

export default Referral;

"use client";

import React, { useState } from "react";
import Image from "next/image";

import { cn } from "@/handlers/types/ui/common";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import usePath from "@/handlers/hooks/route/usePath";

import { FE_URL } from "@/handlers/constants/route";
import { useAuth } from "@/components/context/AuthProvider";

import AvatarNameImage from "@/components/ui/atomic/avatar/name_image";
import { ElfaLink } from "@/components/ui/atomic/next/ElfaLink";
import useNavbar from "@/handlers/hooks/layout/useNavbar";
import usePush from "@/handlers/hooks/route/usePush";
import ElfaSlidingModal from "../ui/compound/floating/ElfaSlidingModal";
import SkeletonBackground from "./skeleton/SkeletonBackground";

import PowerOff from "@/public/icons/profile/off.svg";
import DummyProfile from "@/public/icons/profile/dummy.svg";

import SocialMedia from "./skeleton/SocialMedia";
import { Button } from "../ui/button";

export const NAV_LINKS = [
  {
    link: FE_URL.MAIN,
    title: "Feed",
  },
  {
    link: "/find",
    title: "Marketplace",
  },
];

export const SHORT_LINKS = [
  {
    link: FE_URL.MAIN,
    title: "Home",
  },
  {
    link: "/find",
    title: "Marketplace",
  },
];

const Navbar = () => {
  const { shouldShowNav, isAtFullTop } = useNavbar();
  const push = usePush();

  const { isPathActive } = usePath();
  const isMobile = true;
  const { elfaConfig } = useAuth();

  const [isProfilePopoverDisplayed, setIsProfilePopoverDisplayed] =
    useState(false);

  const renderElfaProfileModal = () => {
    return (
      <ElfaSlidingModal
        headerClassName="border-b-0 !text-lg"
        titleClassName="w-full"
        contentClassName="!pt-0 !px-0"
        shouldDisplayCloseIcon={false}
        title={
          <>
            <div className="flex gap-4 justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  className="size-10 cursor-pointer"
                  onClick={() => setIsProfilePopoverDisplayed(true)}
                >
                  <AvatarImage
                    alt={elfaConfig?.profile.profileName}
                    src={elfaConfig?.profile.profileImg}
                    className="rounded-full size-10"
                  />
                  <AvatarFallback>
                    <AvatarNameImage
                      className="size-10"
                      fullName={elfaConfig?.profile.profileName ?? "ELFA"}
                    />
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className=" text-lg">
                    {elfaConfig?.profile.profileName ? (
                      `${elfaConfig?.profile.profileName}`
                    ) : (
                      <div className="h-7 w-28">
                        <SkeletonBackground isLoading />
                      </div>
                    )}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DummyProfile />
                <PowerOff className="fill-gray-900" />
              </div>
            </div>
          </>
        }
        className="md:w-[412px]"
        isOpen={isProfilePopoverDisplayed}
        handleClose={() => setIsProfilePopoverDisplayed(false)}
        Footer={<SocialMedia />}
        footerClassName="border-t border-t-gray-300"
      >
        <div className="w-full">
          <ul className="">
            {SHORT_LINKS.map(({ link, title }) => (
              <li key={title}>
                <button
                  className={cn(
                    "w-full !h-10 text-base hover:bg-gray-200 text-left pl-4",
                    {
                      "text-purple-500 font-semibold": isPathActive(link),
                    },
                  )}
                  onClick={() => push(link)}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ElfaSlidingModal>
    );
  };

  const renderProfilePopover = () => {
    return (
      <>
        <Avatar
          className="size-10 cursor-pointer z-[20]"
          onClick={() => setIsProfilePopoverDisplayed(true)}
        >
          <AvatarImage
            alt={elfaConfig?.profile.profileName}
            src={elfaConfig?.profile.profileImg}
            className="rounded-full size-10"
          />
        </Avatar>
      </>
    );
  };

  return (
    <>
      {renderElfaProfileModal()}
      <nav
        className={cn(
          "bg-purple-bg w-full fixed z-50 py-4 top-0 transition duration-200",
          {
            shadow: !isAtFullTop,
            "translate-y-0": shouldShowNav,
            "-translate-y-[80px]": !shouldShowNav,
          },
        )}
      >
        <div
          className={cn(
            "flex items-center w-full justify-between max-w-screen-2xl mx-auto gap-4",
            "px-4 xs:px-6 sm:px-8 xl:px-6",
          )}
        >
          <div className="flex items-center gap-6">
            <ElfaLink
              href={FE_URL.MAIN}
              className="min-w-[60px] sm:min-w-[85px]"
            >
              <Image
                src="/brand_assets/brand-dark.svg"
                width={isMobile ? 65 : 85}
                height={28}
                alt="Elfa"
                title="Elfa"
                quality={100}
              />
            </ElfaLink>
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="icon">
              <Image
                src="/brand_assets/search-icon.svg"
                width={16}
                height={16}
                alt="search-icon"
                className=""
              />
            </Button>

            {renderProfilePopover()}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import usePush from "@/handlers/hooks/route/usePush";

const Referral = () => {
  const push = usePush();

  useEffect(() => {
    if (typeof window !== "undefined")
      window.localStorage.setItem("accessPass", "true");
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-[72px]" />

      <div className="w-full relative h-80">
        <Image
          src="/user/banner.png"
          layout="fill"
          objectFit="cover"
          className="h-auto"
          // width="100%"
          alt=""
        />
      </div>
      <div className="mt-12 px-4 flex flex-col gap-4">
        <div className="text-[25px] leading-9 font-semibold text-gray-900 text-center">
          Congrats on gaining Tsuki.eth’s pass
        </div>
        <div className="text-gray-700 px-6 text-center">
          Tsuki.eth’s signals will start appearing on your feed.
        </div>
        <div className="my-6">
          <Button
            className="w-full"
            variant="primary"
            size="lg"
            onClick={() => push("/")}
          >
            Back to feed
          </Button>
        </div>
      </div>
    </>
  );
};

export default Referral;

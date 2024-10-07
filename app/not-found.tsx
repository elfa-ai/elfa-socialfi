"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LimitedWidthContainer from "@/components/ui/atomic/layout/LimitedWidthContainer";
import { Button } from "@/components/ui/button";
import { FE_URL } from "@/handlers/constants/route";
import Image from "next/image";
import usePush from "@/handlers/hooks/route/usePush";

const Custom404 = () => {
  const push = usePush();

  return (
    <>
      <Navbar />
      <LimitedWidthContainer>
        <div className="flex items-center justify-center">
          <Image
            alt="User photo"
            src="/decorations/elfa-hunter-black.svg"
            width={332}
            height={414}
          />
        </div>
        <h1 className="text-[48px] leading-[1] my-2 font-semibold text-center text-gray-900">
          Sorry page cannot be found
        </h1>
        <p className="text-center  text-gray-700 mt-4">
          You will be redirected in {5} {5 <= 1 ? "second" : "seconds"}
        </p>

        <p className="mt-6 text-center  text-gray-700">
          <Button
            variant="primary"
            className="font-semibold w-4/5 text-lg"
            onClick={() => push(FE_URL.MAIN)}
          >
            Continue
          </Button>
        </p>
      </LimitedWidthContainer>
      <Footer />
    </>
  );
};

export default Custom404;

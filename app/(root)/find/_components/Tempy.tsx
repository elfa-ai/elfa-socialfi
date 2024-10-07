"use client";

import SkeletonBackground from "@/components/layout/skeleton/SkeletonBackground";
import { MARKETPLACE_USERS } from "@/handlers/constants/temp";
import useInitRender from "@/handlers/hooks/layout/useInitRender";
import { formatPriceDisplay } from "@/handlers/utils/helpers/number";
import React from "react";

const initialBalance = 4004;
const usdBalance = 156420;

const tokenFormat = (number: number) =>
  new Intl.NumberFormat("en-US").format(number);

const Tempy = () => {
  const initRender = useInitRender();

  const isAccessPassed =
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("accessPass") ?? "false");

  const resultingBalance =
    initialBalance - (isAccessPassed ? MARKETPLACE_USERS[0].price : 0);

  if (!initRender)
    return (
      <div className="my-6 h-[84.5px]">
        <SkeletonBackground isLoading />
      </div>
    );

  return (
    <div className="my-6 text-center flex flex-col gap-1">
      <div className="text-sm">Available Balance</div>
      <div className="text-xl text-purple-100 font-semibold">
        {formatPriceDisplay(usdBalance)}
      </div>
      <div className="text-xs">
        {tokenFormat(resultingBalance)} $LFA · 2 keys
      </div>
    </div>
  );
};

export default Tempy;

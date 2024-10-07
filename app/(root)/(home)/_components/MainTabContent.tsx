"use client";

import React, { useState } from "react";

import ActivityFeeds from "./ActivityFeeds";

import ActivityFeedDailySummary from "./DailySummary";
import { cn } from "@/handlers/types/ui/common";

const MainTabContent = () => {
  const [currentView, setCurrentView] = useState();

  return (
    <>
      <div
        className={cn(
          "w-full max-w-screen-2xl mx-auto gap-4",
          "px-0 sm:px-8 xl:px-6",
        )}
      >
        <div className="px-4 sm:px-0">
          <ActivityFeedDailySummary
            setCurrentView={setCurrentView}
            currentView={currentView}
          />
        </div>
        <div>
          <ActivityFeeds currentView={currentView} />
        </div>
        <div className="order-first lg:order-2 col-start-1 col-end-13 lg:col-start-10 lg:col-span-3 lg:mt-[120px] px-4 sm:px-0">
          <div className="md:sticky md:top-[68px] overflow-y-auto"></div>
        </div>
      </div>
    </>
  );
};

export default MainTabContent;

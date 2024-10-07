import Navbar from "@/components/layout/Navbar";
import React from "react";
import MainTabContent from "./_components/MainTabContent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elfa AI | Activity Feeds",
  description:
    "The SocialFi platform powered by AI to help you uncover hidden alpha and trade signals.",
};

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[72px]" />
      <div className="mt-4 md:mt-0" />
      <main>
        <MainTabContent />
      </main>
    </>
  );
};

export default Main;

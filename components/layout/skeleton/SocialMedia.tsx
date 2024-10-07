"use client";

import { Social } from "@/components/ui/atomic/social";
import {
  ELFA_TWITTER_URL,
  ELFA_TELEGRAM_URL,
} from "@/handlers/constants/route";

import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex gap-2 w-fit text-gray-900">
      <Social
        type="twitter"
        link={ELFA_TWITTER_URL}
        label="Go to Elfa's X profile"
      />
      <Social
        type="telegram"
        link={ELFA_TELEGRAM_URL}
        label="Go to Elfa's Telegram channel"
      />
    </div>
  );
};

export default SocialMedia;

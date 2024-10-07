import React from "react";

import { formatRoundNumberToShortForm } from "@/handlers/utils/helpers/number";

type FollowerTextProps = {
  account: any;
};

const FollowerText = ({ account }: FollowerTextProps) => {
  return (
    <>
      {"smartFollowerCount" in account && account.smartFollowerCount > 0
        ? `${formatRoundNumberToShortForm(account.smartFollowerCount)} smart followers`
        : "followerCount" in account
          ? `${formatRoundNumberToShortForm(account.followerCount)} followers`
          : null}
    </>
  );
};

export default FollowerText;

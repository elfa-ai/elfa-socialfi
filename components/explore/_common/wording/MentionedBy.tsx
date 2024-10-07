import React from "react";

import PFP from "../../_common/account/PFP";

type MentionedByProps = {
  mentionedBy: {
    accounts: any[];
    count: number;
  };
  labelRenderer?: (value: number) => React.ReactNode;
  shouldHaveAction?: boolean;
};
const MentionedBy = ({
  mentionedBy,
  labelRenderer,
  shouldHaveAction = true,
}: MentionedByProps) => {
  const DEFAULT_TEXT_RENDERER = (value: number) => {
    if (value <= 0) return null;
    return `+${value} Mentions`;
  };

  const finalLabelRenderer = labelRenderer ?? DEFAULT_TEXT_RENDERER;

  if (mentionedBy.accounts.length === 0) return null;
  return (
    <div className="flex items-center gap-0.5">
      <div className="flex items-center relative ml-3">
        {mentionedBy.accounts.map((account) => (
          <PFP
            account={account}
            key={account.username}
            shouldHaveAction={shouldHaveAction}
          />
        ))}
      </div>
      <div className="text-gray-700 ml-1 text-sm">
        {finalLabelRenderer(mentionedBy.count - mentionedBy.accounts.length)}
      </div>
    </div>
  );
};

export default MentionedBy;

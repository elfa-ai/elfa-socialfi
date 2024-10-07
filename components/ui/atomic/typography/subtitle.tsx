import React from "react";

type SubtitleProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
};

const Subtitle = ({ label, ...props }: SubtitleProps) => {
  return (
    <div {...props} className="text-gray-700 text-sm">
      {label}
    </div>
  );
};

export default Subtitle;

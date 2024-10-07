import React, { Suspense } from "react";

interface ElfaSuspenseBoundaryProps {
  children: React.ReactNode;
}

const ElfaSuspenseBoundary: React.FC<ElfaSuspenseBoundaryProps> = ({
  children,
}) => {
  return (
    <div>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default ElfaSuspenseBoundary;

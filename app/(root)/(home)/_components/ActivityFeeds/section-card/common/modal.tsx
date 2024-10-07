import ElfaDialog from "@/components/ui/compound/floating/ElfaDialog";
import React, { PropsWithChildren } from "react";
import { SectionCardTitleProps } from "./title";
import { cn } from "@/handlers/types/ui/common";

type SectionCardModalProps = Partial<SectionCardTitleProps> &
  PropsWithChildren<{
    handleDismissModal: () => void;
    isOpen: boolean;
    titleClassName?: string;
  }>;

const SectionCardModal = ({
  children,
  handleDismissModal,
  title,
  subtitle,
  isOpen,
  titleClassName,
}: SectionCardModalProps) => {
  if (!isOpen) return null;
  return (
    <ElfaDialog
      isOpen
      closeButton={{ icon: "back" }}
      contentClassName="border-none border-3xl w-full lg:w-fit lg:min-w-[800px] transition no-scrollbar"
      childClassName=" max-h-[75dvh] overflow-y-auto"
      title={
        <div className="text-center text-gray-900 mb-4 h-full">
          {title ? (
            <div
              className={cn(
                "flex text-left items-center h-full",
                titleClassName,
              )}
            >
              {title}
            </div>
          ) : (
            <div className="flex text-left items-center h-full">Back</div>
          )}
          <div className="text-xs">{subtitle}</div>
        </div>
      }
      handleClose={handleDismissModal}
    >
      {children}
    </ElfaDialog>
  );
};

export default SectionCardModal;

"use client";

import useEvent from "@/handlers/hooks/element/useEvent";
import { cn } from "@/handlers/types/ui/common";
import React from "react";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

type ElfaSlidingModalProps = {
  className?: string;
  title: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  shouldDisplayCloseIcon?: boolean;
  children: React.ReactNode;
  Footer?: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
};

const ElfaSlidingModal = ({
  className = "",
  headerClassName = "",
  titleClassName = "",
  contentClassName = "",
  footerClassName = "",
  shouldDisplayCloseIcon = true,
  title,
  isOpen,
  handleClose,
  children,
  Footer,
}: ElfaSlidingModalProps) => {
  useEvent(
    typeof window !== "undefined" ? window : undefined,
    "keydown",
    ({ key }: KeyboardEvent) => key === "Escape" && handleClose(),
  );

  return (
    <>
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed z-[98] w-[100dvw] h-[100dvh] top-0 left-0 bg-black/50"
        />
      )}
      <aside
        className={cn(
          "fixed z-[99] transition duration-300 md:h-[95dvh] md:w-fit md:top-[2.5dvh] md:right-[1rem] h-[80dvh] top-[20dvh] left-0 md:left-auto right-0 w-[100dvw]",
          className,
          {
            "translate-y-0 md:translate-x-0": isOpen,
            "translate-y-[100dvh] md:translate-y-0 md:translate-x-[100dvw]":
              !isOpen,
          },
        )}
      >
        <div className="flex flex-col h-full w-full bg-purple-bg shadow-2xl border border-gray-300 rounded-t-2xl md:rounded-2xl relative">
          <div
            className={cn(
              "flex justify-between py-4 text-gray-900 px-4 border-b border-b-gray-300 font-semibold text-xl items-center",
              headerClassName,
            )}
          >
            <div className={titleClassName}>{title}</div>
            {shouldDisplayCloseIcon && (
              <button onClick={handleClose} aria-label="close">
                <IoClose className="size-8 fill-gray-900" />
              </button>
            )}
          </div>
          <div
            className={cn(
              "flex-1 px-4 py-4 w-full overflow-hidden relative text-gray-900",
              contentClassName,
            )}
          >
            <div className="h-full w-full overflow-auto text-gray-900">
              {children}
            </div>
          </div>
          {Footer && (
            <div className={cn("py-4 px-4 text-gray-900", footerClassName)}>
              {Footer}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default ElfaSlidingModal;

import React, { useRef, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { cn } from "@/handlers/types/ui/common";
import { useWindowsResize } from "@/handlers/hooks/layout/useWindowResize";
import { motion } from "framer-motion";

type SanitizedHtmlProps = React.HTMLAttributes<HTMLParagraphElement> & {
  html: string;
  seeMoreTruncation?: {
    enabled: boolean;
    onClick?: () => void;
  };
  size?: "base" | "sm";
};

const SanitizedHtml = ({
  html,
  seeMoreTruncation = { enabled: false, onClick: undefined },
  size = "base",
  ...restProps
}: SanitizedHtmlProps) => {
  const sanitizedHtmlContent = DOMPurify.sanitize(html.replace(/\n/g, "<br>"));
  const [isTruncated, setIsTruncated] = useState(seeMoreTruncation.enabled);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const { isMobile } = useWindowsResize();
  const getHeight = () => {
    if (isMobile) {
      if (size === "base")
        return { height: 7.5 * 16, heightClassName: "max-h-[7.5rem]" };
      return { height: 4 * 14, heightClassName: "max-h-[3.75rem]" };
    }

    if (size === "base")
      return { height: 4.5 * 16, heightClassName: "max-h-[4.5rem]" };
    return { height: 4.25 * 14, heightClassName: "max-h-[4.25rem]" };
  };

  const isExpandable =
    contentRef?.current && contentRef.current.scrollHeight > getHeight().height;

  const handleClickExpand = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (seeMoreTruncation?.onClick) {
      seeMoreTruncation.onClick();
    } else {
      setIsTruncated((a) => !a);
    }
  };

  return seeMoreTruncation.enabled ? (
    <div className="relative w-full h-full">
      <motion.p
        ref={contentRef}
        initial={false} // Allows dynamic control without resetting animation
        animate={{
          maxHeight: isTruncated ? getHeight().height : "fit-content",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth transition
        // transition={{ type: 'spring', stiffness: 100 }}
        dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
        // {...restProps}
        className={cn(
          "overflow-hidden transition duration-100 text-gray-900",
          {
            "text-sm": size === "sm",
          },
          restProps?.className,
        )}
        {...(isExpandable ? { onClick: handleClickExpand } : {})}
      />
      {isExpandable && (
        <button
          className={cn(
            "cursor-pointer text-pink-500 hover:underline hover:underline-offset-1",
            // 'underline underline-offset-1',
            {
              // 'bg-gray-100': isTruncated,
              "mb-2": !isTruncated,
              "text-sm bottom-0": size === "sm",
            },
            restProps?.className,
          )}
          onClick={handleClickExpand}
        >
          {isTruncated ? "Show more" : "Show less"}
        </button>
      )}
    </div>
  ) : (
    <p
      {...restProps}
      className={cn(
        "text-gray-900",
        {
          "text-sm": size === "sm",
        },
        restProps?.className,
      )}
      dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
    />
  );
};

export default SanitizedHtml;

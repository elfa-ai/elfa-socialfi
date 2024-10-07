import React from "react";
import type { MediaRendererProps } from "./MediaRenderer";
import { cn } from "@/handlers/types/ui/common";

type ImageRendererProps = Omit<MediaRendererProps, "mediaType">;

const ImageRenderer = ({
  mediaUrl,
  onClick,
  className,
  label,
}: ImageRendererProps) => {
  return (
    <img
      src={mediaUrl}
      alt={label}
      className={cn({ "cursor-pointer": !!onClick }, className)}
      draggable={false}
      onClick={onClick}
    />
  );
};

export default ImageRenderer;

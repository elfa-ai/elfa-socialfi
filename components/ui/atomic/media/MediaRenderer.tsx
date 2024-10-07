import React from "react";
import ImageRenderer from "./ImageRenderer";
import VideoRenderer from "./VideoRenderer";
import { TweetMedia } from "@/handlers/types/post";

export type MediaRendererProps = {
  mediaUrl: string;
  mediaType: TweetMedia["type"];
  label: string;
  className?: string;
  onClick?: () => void;
};

const MediaRenderer = ({ mediaType, ...props }: MediaRendererProps) => {
  if (mediaType === "photo") {
    return <ImageRenderer {...props} />;
  }

  if (mediaType === "video") {
    return <VideoRenderer {...props} />;
  }

  return null;
};

export default MediaRenderer;

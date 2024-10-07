import React, { useRef } from "react";
import type { MediaRendererProps } from "./MediaRenderer";
import { cn } from "@/handlers/types/ui/common";
// import useEvent from '@/handlers/hooks/element/useEvent';

type VideoRendererProps = Omit<MediaRendererProps, "mediaType">;

const VideoRenderer = ({
  mediaUrl,
  onClick,
  className,
}: VideoRendererProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  const extraProps: React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > = !!onClick
    ? {
        onClick: (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
          e.preventDefault();
          ref.current?.pause();
          onClick?.();
        },
      }
    : {
        onClick: (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
          e.preventDefault();
          if (ref.current?.paused || ref.current?.ended) {
            ref.current?.play();
          } else {
            ref.current?.pause();
          }
          ref.current?.focus();
        },
        autoPlay: false,
        autoFocus: true,
      };

  // useEvent(
  //   typeof window !== "undefined" ? window : undefined,
  //   "keydown",
  //   (event: KeyboardEvent) => {
  //     if (!isZoomMode || typeof document === "undefined" || !ref.current)
  //       return;

  //     const { key } = event;

  //     event.stopPropagation();

  //     if (key === "ArrowRight" && ref.current === document.activeElement) {
  //       ref.current.currentTime += 5;
  //       if (ref.current.currentTime > ref.current.duration) {
  //         ref.current.pause();
  //         ref.current.currentTime = 0;
  //       }
  //       ref.current.focus();
  //     } else if (
  //       key === "ArrowLeft" &&
  //       ref.current === document.activeElement
  //     ) {
  //       ref.current.currentTime -= 5;
  //       if (ref.current.currentTime < 0) {
  //         ref.current.pause();
  //         ref.current.currentTime = 0;
  //       }
  //       ref.current.focus();
  //     }
  //   },
  // );

  return (
    <video
      ref={ref}
      key={`${mediaUrl}`}
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      className={cn({ "cursor-pointer": !!onClick }, className)}
      draggable={false}
      {...extraProps}
      tabIndex={0}
    >
      <source src={mediaUrl} />
    </video>
  );
};

export default VideoRenderer;

import type { Slide } from "yet-another-react-lightbox";
import type { TweetMedia } from "../types/post";

export const convertMediaToSlide = (media: TweetMedia): Slide => {
  if (media.type === "video")
    return {
      type: "video" as const,
      sources: [
        {
          src: media.url as string,
          type: "video/mp4",
        },
      ],
    };
  return { src: media.url as string };
};

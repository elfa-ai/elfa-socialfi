import React from "react";
import { TweetMedia } from "@/handlers/types/post";
import MediaRenderer from "@/components/ui/atomic/media/MediaRenderer";
import { useDragScroll } from "@/handlers/hooks/layout/useDragScroll";
import { cn } from "@/handlers/types/ui/common";

import { convertMediaToSlide } from "@/handlers/utils/media";
import { useLighthouse } from "@/components/context/LighthouseProvider";

type PostMediaProps = {
  allMedia: TweetMedia[];
  media: TweetMedia[] | undefined;
  account: any;
  baseMediaIndex: number;
  allowClickMedia?: boolean;
};

const PostMedia = ({
  media,
  allMedia,
  account,
  baseMediaIndex,
  allowClickMedia = true,
}: PostMediaProps) => {
  const [ref] = useDragScroll();

  const { handleDisplayLighthouse } = useLighthouse();

  if (!media) return null;

  const getAccumulatedIndex = (index: number) => {
    return baseMediaIndex + index;
  };

  if (!media || media.length === 0) return null;

  return (
    <>
      <div
        className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar"
        ref={ref}
      >
        {media.map(
          (medium, mediaIndex) =>
            !!medium.url && (
              <MediaRenderer
                mediaType={medium.type}
                mediaUrl={medium.url}
                label={`${account.data.name} tweet's media ${mediaIndex + 1}`}
                key={medium.url}
                className={cn(
                  "max-h-[154px] md:max-h-[385px] rounded-xl !select-none",
                  { "border border-gray-300": medium.type === "photo" },
                )}
                onClick={() => {
                  if (!allowClickMedia) return;

                  handleDisplayLighthouse(
                    allMedia.map(convertMediaToSlide),
                    getAccumulatedIndex(mediaIndex),
                  );
                }}
              />
            ),
        )}
      </div>
    </>
  );
};

export default PostMedia;

// <div className="">
//   <div
//     className="fixed w-[100dvw] h-[100dvh] top-0 left-0 z-[98] bg-black"
//     onClick={() => {
//       setCurrentActiveIndices([null, null]);
//     }}
//   />

//   <div className="fixed w-[100dvw] h-[100dvh] top-0 left-0 z-[100000] grid place-items-center">
//     <MediaRenderer
//       isZoomMode
//       mediaType={activeMedia.type}
//       mediaUrl={activeMedia.url!}
//       label={`${account.data.name} tweet's media ${currentActiveIndices[1]! + 1}`}
//       className="w-full max-w-full md:max-w-[calc(100dvw-(180px))] max-h-full"
//     />
//   </div>

//   <div className="fixed right-4 top-4 z-[100]">
//     <Button
//       onClick={() => setCurrentActiveIndices([null, null])}
//       aria-label="close"
//       variant="icon"
//       size="icon"
//     >
//       <IoClose className="size-8 fill-gray-500" />
//     </Button>
//   </div>

//   {total > 1 && (
//     <div className="fixed left-4 top-[50%] -translate-y-1/2 z-[100]">
//       <Button
//         onClick={() => {
//           handleMoveIndex(-1);
//         }}
//         aria-label="close"
//         variant="icon"
//         size="icon"
//       >
//         <FaArrowLeft className="size-4 fill-gray-500" />
//       </Button>
//     </div>
//   )}
//   {total > 1 && (
//     <div className="fixed right-4 top-[50%] -translate-y-1/2 z-[100]">
//       <Button
//         onClick={() => {
//           handleMoveIndex(1);
//         }}
//         aria-label="close"
//         variant="icon"
//         size="icon"
//       >
//         <FaArrowLeft className="size-4 rotate-180 fill-gray-500" />
//       </Button>
//     </div>
//   )}
// </div>

// const handleMoveIndex = (delta: 1 | -1) => {
//   if (
//     typeof currentActiveIndices[0] !== "number" ||
//     typeof currentActiveIndices[1] !== "number"
//   )
//     return;

//   let currentNumber = 0;
//   for (let i = 0; i < currentActiveIndices[0]; i++) {
//     currentNumber += (allMedia[i] ?? []).length;
//   }
//   currentNumber += currentActiveIndices[1];
//   currentNumber += total + delta;
//   currentNumber %= total;

//   let _postIndex = 0;
//   let _childIndex = 0;

//   while (currentNumber > 0) {
//     if (currentNumber >= (allMedia[_postIndex] ?? []).length) {
//       currentNumber -= (allMedia[_postIndex] ?? []).length;
//       _postIndex += 1;
//     } else {
//       _childIndex = currentNumber;
//       currentNumber = 0;
//     }
//   }
//   return setCurrentActiveIndices([_postIndex, _childIndex]);
// };

// useEvent(
//   typeof window !== "undefined" ? window : undefined,
//   "keydown",
//   ({ key }: KeyboardEvent) => {
//     if (!activeMedia) return;
//     if (key === "Escape") {
//       setCurrentActiveIndices([null, null]);
//     }

//     if (
//       activeMedia.type === "video" &&
//       document.activeElement?.tagName.toLowerCase() === "video"
//     )
//       return;

//     if (key === "ArrowRight") handleMoveIndex(1);
//     if (key === "ArrowLeft") handleMoveIndex(-1);
//   },
// );

import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import type { Slide } from "yet-another-react-lightbox";
import {
  LIGHTHOUSE_CAROUSEL_CONFIG,
  LIGHTHOUSE_ANIMATION_CONFIG,
  VIDEO_PLUGIN_CONFIG,
  ZOOM_PLUGIN_CONFIG,
  LIGHTHOUSE_CONTROLLER_CONFIG,
} from "./constants";

type LighthouseMediaPluginProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoSlides: Slide[];
  index: number;
};

export default function LighthouseMediaPlugin({
  open,
  setOpen,
  videoSlides,
  index,
}: LighthouseMediaPluginProps) {
  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={videoSlides}
        className="z-[9999999] !pointer-events-auto"
        //
        animation={LIGHTHOUSE_ANIMATION_CONFIG}
        carousel={LIGHTHOUSE_CAROUSEL_CONFIG}
        controller={LIGHTHOUSE_CONTROLLER_CONFIG}
        //
        plugins={[Zoom, Video]}
        video={VIDEO_PLUGIN_CONFIG}
        zoom={ZOOM_PLUGIN_CONFIG}
      />
    </>
  );
}

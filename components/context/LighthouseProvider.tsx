"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import MediaPlugin from "../ui/atomic/media/lighthouse/LighthouseMediaPlugin";
import type { Slide } from "yet-another-react-lightbox";
import { enqueueSnackbar } from "notistack";

type LighthouseProviderProps = PropsWithChildren<{}>;

export const LighthouseContext = createContext<LighthouseContextReturnType>(
  {} as LighthouseContextReturnType,
);

type LighthouseContextReturnType = {
  // open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setMediaSlides: React.Dispatch<React.SetStateAction<Slide[] | null>>;
  // setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  handleDisplayLighthouse: (mediaSlides: Slide[], activeIndex: number) => void;
  handleHideLighthouse: () => void;
};

const LighthouseProvider: React.FC<LighthouseProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [mediaSlides, setMediaSlides] = useState<Slide[] | null>(null);
  // mediaSlides, index;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleDisplayLighthouse = (
    mediaSlides: Slide[],
    activeIndex: number,
  ) => {
    if (mediaSlides.length === 0) {
      enqueueSnackbar("No media to display", {
        variant: "warning",
      });
      return;
    }
    setMediaSlides(mediaSlides);
    setActiveIndex(activeIndex);
    setOpen(true);
  };

  const handleHideLighthouse = () => {
    setActiveIndex(null);
    setMediaSlides(null);
  };

  const contextValue = useMemo(
    () => ({
      handleHideLighthouse,
      handleDisplayLighthouse,
      // open,
      // setOpen,
      // setMediaSlides,
      // setActiveIndex
    }),
    [handleDisplayLighthouse],
  );

  return (
    <LighthouseContext.Provider value={contextValue}>
      {children}

      {mediaSlides &&
        mediaSlides.length > 0 &&
        typeof activeIndex === "number" && (
          <MediaPlugin
            open={open}
            setOpen={setOpen}
            index={activeIndex}
            videoSlides={mediaSlides}
          />
        )}
    </LighthouseContext.Provider>
  );
};

export const useLighthouse = () => useContext(LighthouseContext);

export default LighthouseProvider;

import type {
  AnimationSettings,
  CarouselSettings,
  ControllerSettings,
  LightboxProps,
} from "yet-another-react-lightbox";

export const LIGHTHOUSE_ANIMATION_CONFIG: Partial<AnimationSettings> = {
  zoom: 200,
};

export const LIGHTHOUSE_CAROUSEL_CONFIG: Partial<CarouselSettings> = {
  finite: true,
  imageFit: "contain",
  preload: 2,
  imageProps: {},
  padding: 0,
  spacing: 0,
};

export const LIGHTHOUSE_CONTROLLER_CONFIG: Partial<ControllerSettings> = {
  closeOnPullUp: false,
  closeOnPullDown: true,
  closeOnBackdropClick: true,
};

export const VIDEO_PLUGIN_CONFIG: LightboxProps["video"] = {
  controls: true,
  playsInline: true,
  autoPlay: false,
  loop: false,
  muted: false,
  disablePictureInPicture: false,
  disableRemotePlayback: false,
  controlsList: "",
};

export const ZOOM_PLUGIN_CONFIG: Partial<LightboxProps["zoom"]> = {
  maxZoomPixelRatio: 4.5,
  zoomInMultiplier: 1.5,
  doubleTapDelay: 200,
  doubleClickDelay: 300,
  doubleClickMaxStops: 2,
  keyboardMoveDistance: 50,
  wheelZoomDistanceFactor: 100,
  pinchZoomDistanceFactor: 100,
  scrollToZoom: false,
};

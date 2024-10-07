"use client";

import { RefObject, useEffect } from "react";
import useInitRender from "../layout/useInitRender";

type EventName = keyof WindowEventMap | keyof HTMLElementEventMap;
type EventHandler<T extends Event> = (event: T) => void;

export function useEvent<T extends Event = Event>(
  target: HTMLElement | Window | Document | RefObject<HTMLElement> | undefined,
  event: EventName,
  callback: EventHandler<T>,
  shouldTriggerAtStart?: boolean,
  options?: boolean | AddEventListenerOptions,
) {
  const initRender = useInitRender();

  useEffect(() => {
    if (!initRender || !target || typeof target === "undefined") return;
    const targetElement: HTMLElement | Window | Document | null =
      target instanceof Window ||
      target instanceof HTMLElement ||
      target instanceof Document
        ? target
        : target?.current;

    const isSupported: boolean = !!targetElement?.addEventListener;
    if (!isSupported) return;

    const eventListener: (eventName: Event) => void = (eventName: Event) =>
      callback(eventName as T);

    if (targetElement) {
      targetElement.addEventListener(event, eventListener, options);
      return () => {
        targetElement.removeEventListener(event, eventListener, options);
      };
    }
    return;
  }, [event, target, callback, options, initRender]);
}

export default useEvent;

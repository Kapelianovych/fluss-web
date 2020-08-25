/**
 * List of all maps of event name and listeners.
 */
export type EventMapOf<E> = E extends SVGElement
  ? SVGElementEventMap
  : E extends HTMLElement
  ?
      | HTMLElementEventMap
      | HTMLBodyElementEventMap
      | HTMLMediaElementEventMap
      | HTMLMarqueeElementEventMap
      | HTMLFrameSetElementEventMap
  : E extends Element
  ? ElementEventMap
  : E extends Window
  ? WindowEventMap
  : E extends Document
  ? DocumentEventMap
  : { [key: string]: Event };

export type EventOf<E, T extends keyof EventMapOf<E>> = EventMapOf<E>[T];

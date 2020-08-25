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

export type EventListener<E, T extends keyof EventMapOf<E>> = (
  event: EventOf<E, T>
) => void;

export type EventListenerObject<E, T extends keyof EventMapOf<E>> = {
  handleEvent: (event: EventOf<E, T>) => void;
};

export type EventListenerOrEventListenerObject<
  E,
  T extends keyof EventMapOf<E>
> = EventListener<E, T> | EventListenerObject<E, T>;

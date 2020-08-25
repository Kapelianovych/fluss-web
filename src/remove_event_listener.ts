import type { EventOf, EventMapOf } from './types';

/**
 * Removes the event listener in target's event listener list with the same type, callback, and options.
 */
export function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: (
    event: EventOf<E, T>
  ) => void | { handleEvent: (event: EventOf<E, T>) => void },
  options?: boolean | EventListenerOptions
): void {
  // @ts-ignore
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also EventListenerOrEventListenerObject cannot narrow event type :(
  element.removeEventListener(type, listener, options);
}

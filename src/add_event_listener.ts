import { removeEventListener } from './remove_event_listener';
import type { EventMapOf, EventOf } from './types';

/**
 * Appends an event listener for events whose type attribute value is type.
 * The listener argument sets the callback that will be invoked when the event is dispatched.
 *
 * `options.add` is options for native _addEventListener_ method and
 * `options.remove` is options for native _removeEventListener_ method.
 *
 * Returns function that removes `listener` from `element`s
 * event listener list with same `type` and options.
 */
export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: (
    event: EventOf<E, T>
  ) => void | { handleEvent: (event: EventOf<E, T>) => void },
  options: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  } = {}
): () => void {
  // @ts-ignore
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also EventListenerOrEventListenerObject cannot narrow event type :(
  element.addEventListener(type, listener, options.add);
  return () => removeEventListener(element, type, listener, options.remove);
}

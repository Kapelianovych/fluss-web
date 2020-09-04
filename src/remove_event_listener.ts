import { Maybe, maybeOf } from '@fluss/core';
import type { EventMapOf, EventListenerOrEventListenerObject } from './types';

/**
 * Removes the event listener in target's event listener list
 * with the same type, callback, and options.
 */
export function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E | Maybe<E>,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: boolean | EventListenerOptions
): void {
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also TypeScript's EventListenerOrEventListenerObject cannot narrow event type :(
  maybeOf(element).map((target) =>
    target.removeEventListener(
      type as string,
      listener as EventListener | EventListenerObject,
      options
    )
  );
}

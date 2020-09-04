import { removeEventListener } from './remove_event_listener';
import { Maybe, maybeOf } from '@fluss/core';
import type { EventMapOf, EventListenerOrEventListenerObject } from './types';

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
  element: E | Maybe<E>,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  } = {}
): Maybe<() => void> {
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also TypeScript's EventListenerOrEventListenerObject cannot narrow event type :(
  return maybeOf(element)
    .map((target) => {
      target.addEventListener(
        type as string,
        listener as EventListener | EventListenerObject,
        options.add
      );
      return target;
    })
    .map((target) => () =>
      removeEventListener<E, T>(target as E, type, listener, options.remove)
    );
}

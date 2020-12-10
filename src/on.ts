import { Maybe, maybe } from '@fluss/core/maybe';
import type {
  EventMapOf,
  CustomEventListenerOrEventListenerObject,
} from './types';

/**
 * Add an event listener to element.
 * The listener argument sets the callback that will be
 * invoked when the event is dispatched.
 *
 * `options.add` is options for native _addEventListener_ method and
 * `options.remove` is options for native _removeEventListener_ method.
 *
 * Returns function that removes `listener` from `element`s
 * event listener list with same `type` and options.
 */
export function on<E extends EventTarget, T extends keyof EventMapOf<E>>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): () => void;
export function on(
  element: EventTarget | Maybe<EventTarget> | null,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): () => void;
export function on<E extends EventTarget, T extends keyof EventMapOf<E>>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
  options: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  } = {}
): () => void {
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also TypeScript's EventListenerOrEventListenerObject cannot narrow event type :(
  return (
    maybe(element)
      .map((target) => {
        target.addEventListener(
          type as string,
          listener as EventListenerOrEventListenerObject,
          options.add
        );
        return target;
      })
      .map((target) => () =>
        target.removeEventListener(
          type as string,
          listener as EventListenerOrEventListenerObject,
          options.remove
        )
      )
      .extract() ?? (() => {})
  );
}

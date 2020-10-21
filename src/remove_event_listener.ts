import { Maybe, maybeOf } from '@fluss/core';
import type {
  EventMapOf,
  CustomEventListenerOrEventListenerObject,
} from './types';

/**
 * Removes the event listener in target's event listener list
 * with the same type, callback, and options.
 */
export function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
  options?: boolean | EventListenerOptions
): void;
export function removeEventListener(
  element: EventTarget | Maybe<EventTarget> | null,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void;
export function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
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

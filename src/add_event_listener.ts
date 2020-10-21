import { removeEventListener } from './remove_event_listener';
import { Maybe, maybeOf } from '@fluss/core';
import type {
  EventMapOf,
  CustomEventListenerOrEventListenerObject,
} from './types';

export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): Maybe<() => void>;
export function addEventListener(
  element: EventTarget | Maybe<EventTarget> | null,
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): Maybe<() => void>;
export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E | Maybe<E> | null,
  type: T,
  listener: CustomEventListenerOrEventListenerObject<E, T>,
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

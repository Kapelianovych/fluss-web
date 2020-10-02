import { removeEventListener } from './remove_event_listener';
import { isMaybe, Maybe, maybeOf } from '@fluss/core';
import type { EventMapOf, EventListenerOrEventListenerObject } from './types';

export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: Maybe<E>,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): Maybe<() => void>;
export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): () => void;
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
): (() => void) | Maybe<() => void> {
  // keyof returns string | number | symbol type, which is not
  // exists in EventMapOf<E> type. TypeScript possibly cannot narrow type here.
  // Also TypeScript's EventListenerOrEventListenerObject cannot narrow event type :(
  const maybeDetachContainer = maybeOf(element)
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

  return isMaybe<E>(element)
    ? maybeDetachContainer
    : maybeDetachContainer.extract();
}

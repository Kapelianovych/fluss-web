import { Maybe, maybeOf } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function setAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  key: AttributeNamesOf<E> | GlobalAttributeNames,
  value: string
): void;
export function setAttribute(
  element: Element | Maybe<Element> | null,
  key: string,
  value: string
): void;
export function setAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  key: AttributeNamesOf<E> | GlobalAttributeNames | string,
  value: string
): void {
  maybeOf(element).map((el) => el.setAttribute(key, value));
}

import { Maybe, maybeOf } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function hasAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean;
export function hasAttribute(
  element: Element | Maybe<Element> | null,
  name: string
): boolean;
export function hasAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames | string
): boolean {
  return Boolean(
    maybeOf(element)
      .map((el) => el.hasAttribute(name))
      .extract()
  );
}

import { Maybe, maybeOf } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function hasAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean;
export function hasAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: string
): boolean;
export function hasAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames | string
): boolean {
  return Boolean(
    maybeOf(element)
      .map((el) => el.hasAttribute(name))
      .extract()
  );
}

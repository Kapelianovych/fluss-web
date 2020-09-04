import { Maybe, maybeOf } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function hasAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean {
  return maybeOf(element)
    .map((el) => el.hasAttribute(name))
    .extract();
}

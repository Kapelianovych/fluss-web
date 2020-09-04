import { Maybe, maybeOf } from '@fluss/core';
import type { GlobalAttributeNames, AttributeNamesOf } from './types';

export function toggleAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames,
  force?: boolean
): boolean {
  return maybeOf(element)
    .map((el) => el.toggleAttribute(name, force))
    .extract();
}

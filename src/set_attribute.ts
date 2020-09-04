import { Maybe, maybeOf } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function setAttribute<E extends Element>(
  element: E | Maybe<E>,
  key: AttributeNamesOf<E> | GlobalAttributeNames,
  value: string
): void {
  maybeOf(element).map((el) => el.setAttribute(key, value));
}

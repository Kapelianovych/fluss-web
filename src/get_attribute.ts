import { maybeOf, Maybe } from '@fluss/core';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

export function getAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): Maybe<string>;
export function getAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: string
): Maybe<string>;
export function getAttribute<E extends Element>(
  element: E | Maybe<E>,
  name: AttributeNamesOf<E> | GlobalAttributeNames | string
): Maybe<string> {
  return maybeOf(element).map((el) => el.getAttribute(name));
}

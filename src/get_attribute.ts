import { maybeOf, Maybe } from '@fluss/core/maybe';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

/** Get attribute value of element. */
export function getAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): Maybe<string>;
export function getAttribute(
  element: Element | Maybe<Element> | null,
  name: string
): Maybe<string>;
export function getAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames | string
): Maybe<string> {
  return maybeOf(element).map((el) => el.getAttribute(name));
}

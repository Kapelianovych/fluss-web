import { Maybe, maybe } from '@fluss/core/maybe';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

/** Removes attribute from element if it has one. */
export function removeAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): void;
export function removeAttribute(
  element: Element | Maybe<Element> | null,
  name: string
): void;
export function removeAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: AttributeNamesOf<E> | GlobalAttributeNames | string
): void {
  maybe(element).map((el) => el.removeAttribute(name));
}

import { Maybe, maybe } from '@fluss/core/maybe';
import type { AttributeNamesOf, GlobalAttributeNames } from './types';

/**
 * Checks if element has attribute.
 * If element will not exists on the pagge, then `false` will be returned.
 */
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
    maybe(element)
      .map((el) => el.hasAttribute(name))
      .extract()
  );
}

import { Maybe, maybe } from '@fluss/core/maybe';
import type { BooleanAttributesOf } from './types';

/**
 * Toggles a `Boolean attribute` (removing it if it is present and
 * adding it if it is not present) on the given _element_.
 *
 * If _force_ is not given, "toggles" _name_, removing it if it is
 * present and adding it if it is not present. If _force_ is `true`, adds
 * _name_. If _force_ is `false`, removes _name_.
 *
 * Returns `true` if _name_ is now present, and `false` otherwise.
 */
export function toggleAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: BooleanAttributesOf<E>,
  force?: boolean
): boolean;
export function toggleAttribute(
  element: Element | Maybe<Element> | null,
  name: string,
  force?: boolean
): boolean;
export function toggleAttribute<E extends Element>(
  element: E | Maybe<E> | null,
  name: BooleanAttributesOf<E> | string,
  force?: boolean
): boolean {
  return Boolean(
    maybe(element)
      .map((el) => el.toggleAttribute(name, force))
      .extract()
  );
}

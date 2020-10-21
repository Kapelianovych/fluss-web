import { Maybe, maybeOf } from '@fluss/core';
import type { BooleanAttributesOf } from './types';

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
    maybeOf(element)
      .map((el) => el.toggleAttribute(name, force))
      .extract()
  );
}

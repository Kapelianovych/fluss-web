import { maybeOf, Maybe } from '@fluss/core';
import { AttributeNamesOf, GlobalAttributeNames } from './types';

export function getAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): Maybe<string> {
  return maybeOf(element.getAttribute(name));
}

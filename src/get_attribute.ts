import { maybeOf, Maybe } from '@fluss/core';

export function getAttribute<T extends Element = Element>(
  element: T,
  name: string
): Maybe<string> {
  return maybeOf(element.getAttribute(name));
}

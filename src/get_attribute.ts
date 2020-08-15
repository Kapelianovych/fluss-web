import { maybeOf, Maybe } from '@fluss/core';

export function getAttribute(
  element: Element,
  name: string
): Maybe<string> {
  return maybeOf(element.getAttribute(name));
}

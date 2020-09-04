import { wrap, Wrapper } from '@fluss/core';

export function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  options?: ElementCreationOptions
): Wrapper<HTMLElementTagNameMap[T]> {
  return wrap(document.createElement(tagName, options));
}

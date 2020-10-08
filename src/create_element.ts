import { wrap, Wrapper } from '@fluss/core';

export function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  options?: ElementCreationOptions
): Wrapper<HTMLElementTagNameMap[T]>;
export function createElement(
  tagName: string,
  options?: ElementCreationOptions
): Wrapper<HTMLElement>;
export function createElement(
  tagName: string,
  options?: ElementCreationOptions
): Wrapper<HTMLElement> {
  return wrap(document.createElement(tagName, options));
}

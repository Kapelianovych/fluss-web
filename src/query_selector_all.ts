import { Maybe, maybeOf } from '@fluss/core';

export function querySelectorAll<T extends keyof HTMLElementTagNameMap>(
  selector: T,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<HTMLElementTagNameMap[T]>;
export function querySelectorAll<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<T>;
export function querySelectorAll<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<T> {
  const array: Array<T> = [];
  maybeOf(parent || document).map((parentElement) =>
    parentElement
      .querySelectorAll<T>(selector)
      .forEach((item) => array.push(item))
  );
  return Object.freeze(array);
}

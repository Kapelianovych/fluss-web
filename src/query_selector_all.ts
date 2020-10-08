import { Maybe, maybeOf } from '@fluss/core';

export function querySelectorAll<T extends keyof HTMLElementTagNameMap>(
  selector: T,
  parent?: ParentNode | Maybe<ParentNode>
): ReadonlyArray<HTMLElementTagNameMap[T]>;
export function querySelectorAll<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode>
): ReadonlyArray<T>;
export function querySelectorAll<T extends Element>(
  selector: string,
  parent: ParentNode | Maybe<ParentNode> = document
): ReadonlyArray<T> {
  const array: Array<T> = [];
  maybeOf(parent).map((parentElement) =>
    parentElement
      .querySelectorAll<T>(selector)
      .forEach((item) => array.push(item))
  );
  return Object.freeze(array);
}

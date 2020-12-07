import { Maybe, maybe } from '@fluss/core/maybe';

/**
 * Select elements from parent node. By default selects from **document**.
 * Functional variant of `document.querySelectorAll` method.
 */
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
  maybe(parent ?? document).map((parentElement) =>
    parentElement
      .querySelectorAll<T>(selector)
      .forEach((item) => array.push(item))
  );
  return Object.freeze(array);
}

import { maybe, Maybe } from '@fluss/core/maybe';

/**
 * Select element from parent node. By default selects from **document**.
 * Safe variant of `document.querySelector` method.
 */
export function querySelector<T extends keyof HTMLElementTagNameMap>(
  selector: T,
  parent?: ParentNode | Maybe<ParentNode> | null
): Maybe<HTMLElementTagNameMap[T]>;
export function querySelector<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): Maybe<T>;
export function querySelector<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): Maybe<T> {
  return maybe(parent ?? document).map((element) =>
    element.querySelector<T>(selector)
  );
}

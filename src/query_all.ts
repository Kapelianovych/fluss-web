import { Maybe, maybe } from '@fluss/core/maybe';

/**
 * Select elements from parent node. By default selects from **document**.
 * Functional variant of `document.querySelectorAll` method.
 */
export function queryAll<T extends keyof HTMLElementTagNameMap>(
  selector: T,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<HTMLElementTagNameMap[T]>;
export function queryAll<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<T>;
export function queryAll<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode> | null
): ReadonlyArray<T> {
  return (
    maybe(parent ?? document)
      .map((parentElement) => parentElement.querySelectorAll<T>(selector))
      .map<Array<T>>(Array.from)
      .map<ReadonlyArray<T>>(Object.freeze)
      .extract() ?? []
  );
}

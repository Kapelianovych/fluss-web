import { maybeOf, Maybe } from '@fluss/core';

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
  return maybeOf(parent || document).map((element) =>
    element.querySelector<T>(selector)
  );
}

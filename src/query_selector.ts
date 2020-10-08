import { maybeOf, Maybe } from '@fluss/core';

export function querySelector<T extends keyof HTMLElementTagNameMap>(
  selector: T,
  parent?: ParentNode | Maybe<ParentNode>
): Maybe<HTMLElementTagNameMap[T]>;
export function querySelector<T extends Element>(
  selector: string,
  parent?: ParentNode | Maybe<ParentNode>
): Maybe<T>;
export function querySelector<T extends Element>(
  selector: string,
  parent: ParentNode | Maybe<ParentNode> = document
): Maybe<T> {
  return maybeOf(parent).map((element) => element.querySelector<T>(selector));
}

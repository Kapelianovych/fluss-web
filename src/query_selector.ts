import { maybeOf, Maybe } from '@fluss/core';

export function querySelector<T extends Element>(
  selector: string,
  parent: ParentNode = document
): Maybe<T> {
  return maybeOf(parent.querySelector<T>(selector));
}

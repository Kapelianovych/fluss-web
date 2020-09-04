import { maybeOf, Maybe } from '@fluss/core';

export function querySelector<T extends Element>(
  selector: string,
  parent: ParentNode | Maybe<ParentNode> = document
): Maybe<T> {
  return maybeOf(parent).map((parentElement) =>
    parentElement.querySelector<T>(selector)
  );
}

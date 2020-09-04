import { Maybe, maybeOf } from '@fluss/core';

export function prependNodes(
  parent: ParentNode | Maybe<ParentNode>,
  ...children: ReadonlyArray<string | Node>
): void {
  maybeOf(parent).map((parentElement) => parentElement.prepend(...children));
}

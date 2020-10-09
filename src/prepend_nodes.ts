import { Maybe, maybeOf } from '@fluss/core';

export function prependNodes(
  parent: ParentNode | Maybe<ParentNode> | null,
  ...children: ReadonlyArray<string | Node>
): void {
  maybeOf(parent).map((parentElement) => parentElement.prepend(...children));
}

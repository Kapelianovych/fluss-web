import { Maybe, maybeOf } from '@fluss/core';

export function appendNodes(
  parent: ParentNode | Maybe<ParentNode>,
  ...children: ReadonlyArray<string | Node>
): void {
  maybeOf(parent).map((parentElement) => parentElement.append(...children));
}

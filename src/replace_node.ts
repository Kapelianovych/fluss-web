import { Maybe, maybeOf } from '@fluss/core';

export function replaceNode(
  node: ChildNode | Maybe<ChildNode>,
  ...newNodes: ReadonlyArray<string | Node>
): void {
  maybeOf(node).map((n) => n.replaceWith(...newNodes));
}

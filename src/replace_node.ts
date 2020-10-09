import { Maybe, maybeOf } from '@fluss/core';

export function replaceNode(
  node: ChildNode | Maybe<ChildNode> | null,
  ...newNodes: ReadonlyArray<string | Node>
): void {
  maybeOf(node).map((n) => n.replaceWith(...newNodes));
}

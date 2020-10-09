import { Maybe, maybeOf } from '@fluss/core';

export function removeNode(node: ChildNode | Maybe<ChildNode> | null): void {
  maybeOf(node).map((n) => n.remove());
}

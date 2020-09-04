import { Maybe, maybeOf } from '@fluss/core';

export function removeNode(node: ChildNode | Maybe<ChildNode>): void {
  maybeOf(node).map((n) => n.remove());
}

import { Maybe, maybeOf } from '@fluss/core';

export function cloneNode(
  node: Node | Maybe<Node>,
  deep: boolean = false
): Maybe<Node> {
  return maybeOf(node).map((node) => node.cloneNode(deep));
}

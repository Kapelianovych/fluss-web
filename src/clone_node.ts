import { Maybe, maybeOf } from '@fluss/core';

export function cloneNode<T extends Node>(
  node: T | Maybe<T> | null,
  deep: boolean = false
): Maybe<T> {
  return maybeOf(node).map((node) => node.cloneNode(deep) as T);
}

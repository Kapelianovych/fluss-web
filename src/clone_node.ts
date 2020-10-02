import { isMaybe, Maybe } from '@fluss/core';

export function cloneNode<T extends Node>(
  node: Maybe<T>,
  deep?: boolean
): Maybe<T>;
export function cloneNode<T extends Node>(node: T, deep?: boolean): T;
export function cloneNode<T extends Node>(
  node: T | Maybe<T>,
  deep: boolean = false
): T | Maybe<T> {
  return isMaybe<T>(node)
    ? node.map((node) => node.cloneNode(deep) as T)
    : (node.cloneNode(deep) as T);
}

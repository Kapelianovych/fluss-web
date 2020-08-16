export function replace(
  node: ChildNode,
  ...newNodes: ReadonlyArray<string | Node>
): void {
  node.replaceWith(...newNodes);
}

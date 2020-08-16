export function replaceNode(
  node: ChildNode,
  ...newNodes: ReadonlyArray<string | Node>
): void {
  node.replaceWith(...newNodes);
}

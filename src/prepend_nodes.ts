export function prependNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
): void {
  parent.prepend(...children);
}

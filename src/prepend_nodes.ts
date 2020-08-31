export function prependNodes(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void {
  parent.prepend(...childs);
}

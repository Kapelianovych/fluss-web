export function appendNodes(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void {
  parent.append(...childs);
}

export function append(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void {
  parent.append(...childs);
}

export function append(
  parent: ParentNode,
  ...childs: Array<string | Node>
): void {
  parent.append(...childs);
}

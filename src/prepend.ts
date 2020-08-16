export function prepend(
  parent: ParentNode,
  ...childs: Array<string | Node>
): void {
  parent.prepend(...childs);
}

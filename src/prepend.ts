export function prepend(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void {
  parent.prepend(...childs);
}

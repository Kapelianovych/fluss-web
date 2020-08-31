export function appendNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
): void {
  parent.append(...children);
}

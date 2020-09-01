export function toggleAttribute(
  element: Element,
  name: string,
  force?: boolean
): boolean {
  return element.toggleAttribute(name, force);
}

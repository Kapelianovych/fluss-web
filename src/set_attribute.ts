export function setAttribute<T extends Element = Element>(
  element: T,
  key: string,
  value: string
): void {
  element.setAttribute(key, value);
}

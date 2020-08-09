export function querySelectorAll<T extends Element>(
  selector: string,
  parent: ParentNode = document
): ReadonlyArray<T> {
  const array: Array<T> = [];
  parent.querySelectorAll<T>(selector).forEach((item) => array.push(item));
  return array;
}

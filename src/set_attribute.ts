import { AttributeNamesOf, GlobalAttributeNames } from './types';

export function setAttribute<E extends Element>(
  element: E,
  key: AttributeNamesOf<E> | GlobalAttributeNames,
  value: string
): void {
  element.setAttribute(key, value);
}

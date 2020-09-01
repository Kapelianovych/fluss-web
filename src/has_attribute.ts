import { AttributeNamesOf, GlobalAttributeNames } from './types';

export function hasAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean {
  return element.hasAttribute(name);
}

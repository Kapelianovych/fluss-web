import { GlobalAttributeNames, AttributeNamesOf } from './types';

export function toggleAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames,
  force?: boolean
): boolean {
  return element.toggleAttribute(name, force);
}

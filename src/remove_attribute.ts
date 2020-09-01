import { hasAttribute } from './has_attribute';
import { AttributeNamesOf, GlobalAttributeNames } from './types';

export function removeAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): void {
  if (hasAttribute(element, name)) {
    element.removeAttribute(name);
  }
}

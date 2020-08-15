import { hasAttribute } from './has_attribute';

export function removeAttribute(element: Element, name: string): void {
  if (hasAttribute(element, name)) {
    element.removeAttribute(name);
  }
}

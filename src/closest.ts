import { Maybe, maybeOf } from '@fluss/core/maybe';

/**
 * Gets parent element of child element.
 * Safe variant of `child.closest` method.
 */
export function closest<T extends Element>(
  selector: string,
  child: Element | Maybe<Element> | null
): Maybe<T> {
  return maybeOf(child).map((childElement) =>
    childElement.closest<T>(selector)
  );
}

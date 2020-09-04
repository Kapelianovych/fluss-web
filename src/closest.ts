import { Maybe, maybeOf } from '@fluss/core';

export function closest<T extends Element>(
  selector: string,
  child: Element | Maybe<Element>
): Maybe<T> {
  return maybeOf(child).map((childElement) =>
    childElement.closest<T>(selector)
  );
}

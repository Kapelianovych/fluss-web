import { maybeOf, Maybe } from "@fluss/core";

export function closest<T extends Element = Element>(
  selector: string,
  child: Element
): Maybe<T> {
  return maybeOf(child.closest<T>(selector));
}

import { Wrapper, wrap } from "@fluss/core";

export function createTextNode(data: string): Wrapper<Text> {
  return wrap(document.createTextNode(data));
}

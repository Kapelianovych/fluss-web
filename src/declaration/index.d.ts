import { Maybe, Wrapper } from '@fluss/core';

declare module '@fluss/web' {
  /**
   * Select element from parent node. By default selects from **document**.
   * Safe variant of `document.querySelector` method.
   */
  export function querySelector<T extends Element = Element>(
    selector: string,
    parent?: ParentNode
  ): Maybe<T>;

  /**
   * Select elements from parent node. By default selects from **document**.
   * Functional variant of `document.querySelectorAll` method.
   */
  export function querySelectorAll<T extends Element = Element>(
    selector: string,
    parent?: ParentNode
  ): ReadonlyArray<T>;

  /**
   * Gets parent element of child element.
   * Safe variant of `child.closest` method.
   */
  export function closest<T extends Element = Element>(
    selector: string,
    child: Element
  ): Maybe<T>;

  /**
   * Creates element and wraps it in wrapper object.
   * Alternative to `document.createElement` method.
   */
  export function createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    options?: ElementCreationOptions
  ): Wrapper<HTMLElementTagNameMap[T]>;

  /**
   * Create text node and wrap it in Wrapper.
   * Alternative to `document.createTextNode` method.
   */
  export function createTextNode(data: string): Wrapper<Text>;

  /** Set attribute for element. */
  export function setAttribute(
    element: Element,
    key: string,
    value: string
  ): void;

  /**
   * Get attribute value of element.
   */
  export function getAttribute(element: Element, name: string): Maybe<string>;

  /** Checks if element has attribute. */
  export function hasAttribute(element: Element, name: string): boolean;

  /** Removes attribute from element if it has one. */
  export function removeAttribute(element: Element, name: string): void;

  /**
   * Insert _childs_ after last child of _parent_ element.
   * Strings are are teplaced with `Text` elements.
   */
  export function append(
    parent: ParentNode,
    ...childs: ReadonlyArray<string | Node>
  ): void;

  /**
   * Insert _childs_ before first child of _parent_ element.
   * Strings are are teplaced with `Text` elements.
   */
  export function prepend(
    parent: ParentNode,
    ...childs: ReadonlyArray<string | Node>
  ): void;

  /**
   * Replace _node_ with _newNodes_.
   * Strings are replaced with `Text`s.
   */
  export function replaceNode(
    node: ChildNode,
    ...newNodes: ReadonlyArray<string | Node>
  ): void;

  /** Removes node. */
  export function removeNode(node: ChildNode): void;

  /**
   * Clone node. If _deep_ is `true`, function returns node with all
   * descendants. By default _deep_ is `false`.
   */
  export function cloneNode(node: Node, deep?: boolean): Node;
}

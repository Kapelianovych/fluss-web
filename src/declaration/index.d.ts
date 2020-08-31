import { Maybe, Wrapper } from '@fluss/core';

/**
 * List of all maps of event name and listeners.
 */
export type EventMapOf<E> = E extends SVGElement
  ? SVGElementEventMap
  : E extends HTMLElement
  ?
      | HTMLElementEventMap
      | HTMLBodyElementEventMap
      | HTMLMediaElementEventMap
      | HTMLMarqueeElementEventMap
      | HTMLFrameSetElementEventMap
  : E extends Element
  ? ElementEventMap
  : E extends Window
  ? WindowEventMap
  : E extends Document
  ? DocumentEventMap
  : { [key: string]: Event };

/** Gets event based on element and event type. */
export type EventOf<E, T extends keyof EventMapOf<E>> = EventMapOf<E>[T];

export type EventListener<E, T extends keyof EventMapOf<E>> = (
  event: EventOf<E, T>
) => void;

export type EventListenerObject<E, T extends keyof EventMapOf<E>> = {
  handleEvent: (event: EventOf<E, T>) => void;
};

export type EventListenerOrEventListenerObject<
  E,
  T extends keyof EventMapOf<E>
> = EventListener<E, T> | EventListenerObject<E, T>;

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
export function appendNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
): void;

/**
 * Insert _childs_ before first child of _parent_ element.
 * Strings are are teplaced with `Text` elements.
 */
export function prependNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
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

/**
 * Appends an event listener for events whose type attribute value is type.
 * The listener argument sets the callback that will be invoked when the event is dispatched.
 *
 * `options.add` is options for native _addEventListener_ method and
 * `options.remove` is options for native _removeEventListener_ method.
 *
 * Returns function that removes `listener` from `element`s
 * event listener list with same `type` and options.
 */
export function addEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  }
): () => void;

/**
 * Removes the event listener in target's event listener list with the same type, callback, and options.
 */
export function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: boolean | EventListenerOptions
): void;

/**
 * Dispatches a synthetic event event to element and returns true if
 * either event's cancelable attribute value is false or its preventDefault()
 * method was not invoked, and false otherwise.
 */
export function dispatchEvent<E extends EventTarget>(
  element: E,
  event: Event
): boolean;

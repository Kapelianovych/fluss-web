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
export function addEventListener<E extends EventTarget>(
  element: E,
  type: E extends SVGElement
    ? keyof SVGElementEventMap
    : E extends HTMLElement
    ?
        | keyof HTMLElementEventMap
        | keyof HTMLBodyElementEventMap
        | keyof HTMLMediaElementEventMap
        | keyof HTMLMarqueeElementEventMap
        | keyof HTMLFrameSetElementEventMap
    : E extends Element
    ? keyof ElementEventMap
    : E extends Window
    ? keyof WindowEventMap
    : E extends Document
    ? keyof DocumentEventMap
    : string,
  listener: EventListener | EventListenerObject,
  options: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  } = {}
): () => void {
  element.addEventListener(type, listener, options.add);
  return () => element.removeEventListener(type, listener, options.remove);
}

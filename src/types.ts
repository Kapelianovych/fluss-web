/**
 * List of all events names.
 */
export type AllEventMap<E> = E extends SVGElement
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
  : string;

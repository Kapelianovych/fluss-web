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
 * Global attributes are attributes common to all HTML elements;
 * they can be used on all elements, though they may have no effect on some elements.
 */
export type GlobalAttributeNames =
  | 'accesskey'
  | 'autocapitalize'
  | 'class'
  | 'contenteditable'
  | 'dir'
  | 'draggable'
  | 'exportparts'
  | 'hidden'
  | 'id'
  | 'inputmode'
  | 'is'
  | 'itemid'
  | 'itemprop'
  | 'itemref'
  | 'itemscope'
  | 'itemtype'
  | 'lang'
  | 'part'
  | 'slot'
  | 'spellcheck'
  | 'style'
  | 'tabindex'
  | 'title'
  | 'translate';

export type FormAttributeNames =
  | 'accept'
  | 'accept-charset'
  | 'action'
  | 'autocomplete'
  | 'enctype'
  | 'method'
  | 'name'
  | 'novalidate'
  | 'target';
export type InputAttributeNames =
  | 'accept'
  | 'alt'
  | 'autocomplete'
  | 'autofocus'
  | 'capture'
  | 'checked'
  | 'dirname'
  | 'disabled'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'height'
  | 'list'
  | 'max'
  | 'maxlength'
  | 'minlength'
  | 'min'
  | 'name'
  | 'pattern'
  | 'placeholder'
  | 'readonly'
  | 'required'
  | 'size'
  | 'src'
  | 'step'
  | 'type'
  | 'usemap'
  | 'value'
  | 'width';
export type AppletAttributeNames = 'align' | 'alt' | 'code' | 'codebase';
export type CaptionAttributeNames = 'align';
export type ColAttributeNames = 'align' | 'span';
export type ColGroupAttributeNames = 'align' | 'span';
export type HrAttributeNames = 'align';
export type IFrameAttributeNames =
  | 'align'
  | 'allow'
  | 'csp'
  | 'height'
  | 'importance'
  | 'loading'
  | 'name'
  | 'referrerpolicy'
  | 'sandbox'
  | 'src'
  | 'srcdoc'
  | 'width';
export type ImgAttributeNames =
  | 'align'
  | 'alt'
  | 'crossorigin'
  | 'decoding'
  | 'height'
  | 'importance'
  | 'ismap'
  | 'loading'
  | 'referrerpolicy'
  | 'sizes'
  | 'src'
  | 'srcset'
  | 'usemap'
  | 'width';
export type TableAttributeNames = 'align' | 'summary';
export type TBodyAttributeNames = 'align';
export type TdAttributeNames = 'align' | 'colspan' | 'headers' | 'rowspan';
export type TFootAttributeNames = 'align';
export type ThAttributeNames =
  | 'align'
  | 'colspan'
  | 'headers'
  | 'rowspan'
  | 'scope';
export type THeadAttributeNames = 'align';
export type TrAttributeNames = 'align';
export type AreaAttributeNames =
  | 'alt'
  | 'coords'
  | 'download'
  | 'href'
  | 'hreflang'
  | 'media'
  | 'ping'
  | 'referrerpolicy'
  | 'rel'
  | 'shape'
  | 'target';
export type ScriptAttributeNames =
  | 'async'
  | 'charset'
  | 'crossorigin'
  | 'defer'
  | 'importance'
  | 'integrity'
  | 'language'
  | 'referrerpolicy'
  | 'src'
  | 'type';
export type SelectAttributeNames =
  | 'autocomplete'
  | 'autofocus'
  | 'disabled'
  | 'form'
  | 'multiple'
  | 'name'
  | 'required'
  | 'size';
export type TextAreaAttributeNames =
  | 'autocomplete'
  | 'autofocus'
  | 'cols'
  | 'dirname'
  | 'disabled'
  | 'enterkeyhint'
  | 'form'
  | 'inputmode'
  | 'maxlength'
  | 'minlength'
  | 'name'
  | 'placeholder'
  | 'readonly'
  | 'required'
  | 'rows'
  | 'wrap';
export type ButtonAttributeNames =
  | 'autofocus'
  | 'disabled'
  | 'form'
  | 'formaction'
  | 'formenctype'
  | 'formmethod'
  | 'formnovalidate'
  | 'formtarget'
  | 'name'
  | 'type'
  | 'value';
export type AudioAttributeNames =
  | 'autoplay'
  | 'buffered'
  | 'controls'
  | 'crossorigin'
  | 'loop'
  | 'muted'
  | 'preload'
  | 'src';
export type VideoAttributeNames =
  | 'autoplay'
  | 'buffered'
  | 'controls'
  | 'crossorigin'
  | 'height'
  | 'loop'
  | 'muted'
  | 'poster'
  | 'preload'
  | 'src'
  | 'width';
export type MetaAttributeNames = 'charset' | 'content' | 'http-equiv' | 'name';
export type BlockQuoteAttributeNames = 'cite';
export type DelAttributeNames = 'cite' | 'datetime';
export type InsAttributeNames = 'cite' | 'datetime';
export type QAttributeNames = 'cite';
export type LinkAttributeNames =
  | 'crossorigin'
  | 'href'
  | 'hreflang'
  | 'importance'
  | 'integrity'
  | 'media'
  | 'referrerpolicy'
  | 'rel'
  | 'sizes';
export type ObjectAttributeNames =
  | 'data'
  | 'form'
  | 'height'
  | 'name'
  | 'type'
  | 'usemap'
  | 'width';
export type TimeAttributeNames = 'datetime';
export type TrackAttributeNames =
  | 'default'
  | 'kind'
  | 'label'
  | 'src'
  | 'srclang';
export type FieldSetAttributeNames = 'disabled' | 'form' | 'name';
export type OptGroupAttributeNames = 'disabled' | 'label';
export type OptionAttributeNames = 'disabled' | 'label' | 'selected' | 'value';
export type AnchorAttributeNames =
  | 'download'
  | 'href'
  | 'hreflang'
  | 'media'
  | 'ping'
  | 'referrerpolicy'
  | 'rel'
  | 'shape'
  | 'target';
export type LabelAttributeNames = 'for' | 'form';
export type OutputAttributeNames = 'for' | 'form' | 'name';
export type MeterAttributeNames =
  | 'form'
  | 'high'
  | 'low'
  | 'max'
  | 'min'
  | 'optimum'
  | 'value';
export type ProgressAttributeNames = 'form' | 'max' | 'value';
export type CanvasAttributeNames = 'height' | 'width';
export type EmbedAttributeNames = 'height' | 'src' | 'type' | 'width';
export type BaseAttributeNames = 'href' | 'target';
export type SourceAttributeNames =
  | 'media'
  | 'sizes'
  | 'src'
  | 'srcset'
  | 'type';
export type StyleAttributeNames = 'media' | 'scoped' | 'type';
export type MapAttributeNames = 'name';
export type ParamAttributeNames = 'name' | 'value';
export type DetailsAttributeNames = 'open';
export type OlAttributeNames = 'reversed' | 'start';
export type MenuAttributeNames = 'type';
export type DataAttributeNames = 'value';
export type LiAttributeNames = 'value';

/** Gets attribute names that can be used in element. */
export type AttributeNamesOf<E extends Element> = E extends HTMLFormElement
  ? FormAttributeNames
  : E extends HTMLInputElement
  ? InputAttributeNames
  : E extends HTMLAppletElement
  ? AppletAttributeNames
  : E extends HTMLTableCaptionElement
  ? CaptionAttributeNames
  : E extends HTMLTableColElement
  ? ColGroupAttributeNames | ColAttributeNames
  : E extends HTMLHRElement
  ? HrAttributeNames
  : E extends HTMLIFrameElement
  ? IFrameAttributeNames
  : E extends HTMLImageElement
  ? ImgAttributeNames
  : E extends HTMLTableElement
  ? TableAttributeNames
  : E extends HTMLTableSectionElement
  ? TBodyAttributeNames | TFootAttributeNames | THeadAttributeNames
  : E extends HTMLTableCellElement
  ? TdAttributeNames
  : E extends HTMLTableHeaderCellElement
  ? ThAttributeNames
  : E extends HTMLTableRowElement
  ? TrAttributeNames
  : E extends HTMLAreaElement
  ? AreaAttributeNames
  : E extends HTMLScriptElement
  ? ScriptAttributeNames
  : E extends HTMLSelectElement
  ? SelectAttributeNames
  : E extends HTMLTextAreaElement
  ? TextAreaAttributeNames
  : E extends HTMLButtonElement
  ? ButtonAttributeNames
  : E extends HTMLAudioElement
  ? AudioAttributeNames
  : E extends HTMLVideoElement
  ? VideoAttributeNames
  : E extends HTMLMetaElement
  ? MetaAttributeNames
  : E extends HTMLQuoteElement
  ? BlockQuoteAttributeNames | QAttributeNames
  : E extends HTMLModElement
  ? DelAttributeNames | InsAttributeNames
  : E extends HTMLLinkElement
  ? LinkAttributeNames
  : E extends HTMLObjectElement
  ? ObjectAttributeNames
  : E extends HTMLTimeElement
  ? TimeAttributeNames
  : E extends HTMLTrackElement
  ? TrackAttributeNames
  : E extends HTMLFieldSetElement
  ? FieldSetAttributeNames
  : E extends HTMLOptGroupElement
  ? OptGroupAttributeNames
  : E extends HTMLOptionElement
  ? OptionAttributeNames
  : E extends HTMLAnchorElement
  ? AnchorAttributeNames
  : E extends HTMLLabelElement
  ? LabelAttributeNames
  : E extends HTMLOutputElement
  ? OutputAttributeNames
  : E extends HTMLMeterElement
  ? MeterAttributeNames
  : E extends HTMLProgressElement
  ? ProgressAttributeNames
  : E extends HTMLCanvasElement
  ? CanvasAttributeNames
  : E extends HTMLEmbedElement
  ? EmbedAttributeNames
  : E extends HTMLBaseElement
  ? BaseAttributeNames
  : E extends HTMLSourceElement
  ? SourceAttributeNames
  : E extends HTMLStyleElement
  ? StyleAttributeNames
  : E extends HTMLMapElement
  ? MapAttributeNames
  : E extends HTMLParamElement
  ? ParamAttributeNames
  : E extends HTMLDetailsElement
  ? DetailsAttributeNames
  : E extends HTMLOListElement
  ? OlAttributeNames
  : E extends HTMLMenuElement
  ? MenuAttributeNames
  : E extends HTMLDataElement
  ? DataAttributeNames
  : E extends HTMLLIElement
  ? LiAttributeNames
  : GlobalAttributeNames;

/**
 * Select element from parent node. By default selects from **document**.
 * Safe variant of `document.querySelector` method.
 */
export function querySelector<T extends Element>(
  selector: string,
  parent?: ParentNode
): Maybe<T>;

/**
 * Select elements from parent node. By default selects from **document**.
 * Functional variant of `document.querySelectorAll` method.
 */
export function querySelectorAll<T extends Element>(
  selector: string,
  parent?: ParentNode
): ReadonlyArray<T>;

/**
 * Gets parent element of child element.
 * Safe variant of `child.closest` method.
 */
export function closest<T extends Element>(
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
export function setAttribute<E extends Element>(
  element: E,
  key: AttributeNamesOf<E> | GlobalAttributeNames,
  value: string
): void;

/**
 * Get attribute value of element.
 */
export function getAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): Maybe<string>;

/** Checks if element has attribute. */
export function hasAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean;

/** Removes attribute from element if it has one. */
export function removeAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): void;

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

/**
 * Toggles a `Boolean attribute` (removing it if it is present and
 * adding it if it is not present) on the given _element_.
 *
 * If _force_ is not given, "toggles" _name_, removing it if it is
 * present and adding it if it is not present. If _force_ is `true`, adds
 * _name_. If _force_ is `false`, removes _name_.
 *
 * Returns `true` if _name_ is now present, and `false` otherwise.
 */
export function toggleAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames,
  force?: boolean
): boolean;

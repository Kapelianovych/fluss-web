interface DocumentExtendedEventMap extends DocumentEventMap {
  DOMContentLoaded: Event;
}

/** List of all maps of event name and listeners. */
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
  ? DocumentExtendedEventMap
  : { [key: string]: Event };

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

/** [Link to list.](https://html.spec.whatwg.org/#attributes-3) */
export type BooleanAttributesOf<T extends Element> = T extends HTMLIFrameElement
  ? 'allowfullscreen'
  : T extends HTMLScriptElement
  ? 'async' | 'defer' | 'nomodule'
  : T extends HTMLAudioElement
  ? 'autoplay' | 'controls' | 'loop' | 'muted'
  : T extends HTMLVideoElement
  ? 'autoplay' | 'controls' | 'loop' | 'muted' | 'playsinline'
  : T extends HTMLInputElement
  ?
      | 'checked'
      | 'disabled'
      | 'formnovalidate'
      | 'multiple'
      | 'readonly'
      | 'required'
  : T extends HTMLTrackElement
  ? 'default'
  : T extends HTMLButtonElement
  ? 'disabled' | 'formnovalidate'
  : T extends HTMLOptGroupElement
  ? 'disabled'
  : T extends HTMLOptionElement
  ? 'disabled' | 'selected'
  : T extends HTMLSelectElement
  ? 'disabled' | 'multiple' | 'required'
  : T extends HTMLTextAreaElement
  ? 'disabled' | 'readonly' | 'required'
  : T extends HTMLFieldSetElement
  ? 'disabled'
  : T extends HTMLLinkElement
  ? 'disabled'
  : T extends HTMLImageElement
  ? 'ismap'
  : T extends HTMLFormElement
  ? 'novalidate'
  : T extends HTMLDetailsElement
  ? 'open'
  : T extends HTMLDialogElement
  ? 'open'
  : T extends HTMLOListElement
  ? 'reversed'
  : // Common for most elements.
    'autofocus' | 'hidden' | 'itemscope';

# @fluss/web - make Web more functional and safe

`@fluss/web` - small library that contains couple functions for interacting with DOM in safe and functional way.

## Example use

```typescript
const maybeBlock /*: Maybe<Element> */ = querySelector('.block'); // Result is wrapped in `Maybe` because `document.querySelector` may return "null" if element doesn't exist on the page.
```

## @fluss/web's advantages

- TypeScript included

TypeScript definitions are included in the library.

Functions that deals with attributes (`getAttribute`, `setAttribute`, `hasAttribute`, `removeAttribute` and `toggleAttribute`) do not allow to set to element attribute, that do nothing for it. Each attribute is restricted to some HTML element(s), so it is reasonable to check such restriction. [More about which attribute belongs to which element is at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

- Small size

Every function is created as small as possible.

# Install

```sh
npm i @fluss/web
```

## API

> In TypeScript examples is used [Flow](https://flow.org)'s comment notation if type is inferred.

### querySelector

```typescript
function querySelector<T extends Element>(
  selector: string,
  parent?: ParentNode
): Maybe<T>;
```

Select element on the page.

```typescript
const same /*: Maybe<Element> */ = querySelector('.gd'); // search inside whole document
const inner /*: Maybe<HTMLElement> */ = querySelector<HTMLElement>('.gd', same); // search inside same
```

### querySelectorAll

```typescript
function querySelectorAll<T extends Element>(
  selector: string,
  parent?: ParentNode
): ReadonlyArray<T>;
```

Select elements on the page.

```typescript
const same /*: ReadonlyArray<HTMLElement> */ = querySelectorAll<HTMLElement>(
  '.gd'
); // search inside whole document
const inner /*: ReadonlyArray<HTMLElement> */ = querySelectorAll<HTMLElement>(
  '.gd',
  someElement
); // search inside someElement
```

### closest

```typescript
function closest<T extends Element>(selector: string, child: Element): Maybe<T>;
```

Find closest ancestor that match selector.

```typescript
const parent /*: Maybe<Element> */ = closest('.block', childElement);
```

### createElement

```typescript
function createElement<T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  options?: ElementCreationOptions
): Wrapper<HTMLElementTagNameMap[T]>;
```

Create an instance of element of the specified tag.

```typescript
const element /*: Wrapper<HTMLDivElement> */ = createElement('div');
```

### createTextNode

```typescript
function createTextNode(data: string): Wrapper<Text>;
```

Creates text string from specified value.

```typescript
const textElement /*: Wrapper<Text> */ = createTextNode('Yay!');
```

### setAttribute

```typescript
function setAttribute<E extends Element>(
  element: E,
  key: AttributeNamesOf<E> | GlobalAttributeNames,
  value: string
): void;
```

Set attribute for element.

```typescript
querySelector('div').map((el) => setAttribute(el, 'class', 'el'));
```

### getAttribute

```typescript
function getAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): Maybe<string>;
```

Gets attribute value of element.

```typescript
const attributeValue /*: Maybe<string> */ = querySelector('div').chain((el) =>
  getAttribute(el, 'class')
);
```

### hasAttribute

```typescript
function hasAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): boolean;
```

Checks if element has attribute.

```typescript
const hasElementAttribute /*: boolean */ = querySelector('div')
  .map((el) => hasAttribute(el, 'class'))
  .extract();
```

### removeAttribute

```typescript
function removeAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames
): void;
```

Removes attribute from element if it has one.

```typescript
const hasElementAttribute /*: boolean */ = querySelector('div')
  .map((el) => {
    removeAttribute(el, 'class');
    return el;
  })
  .map((el) => hasAttribute(el, 'class'))
  .extract();
```

### toggleAttribute

```typescript
function toggleAttribute<E extends Element>(
  element: E,
  name: AttributeNamesOf<E> | GlobalAttributeNames,
  force?: boolean
): boolean;
```

Toggles a `Boolean attribute` (removing it if it is present and adding it if it is not present) on the given element.

```typescript
const hasElementAttribute /*: boolean */ = querySelector('input')
  .map((el) => toogleAttribute(el, 'readonly'))
  .extract();
```

### appendNodes

```typescript
function appendNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
): void;
```

Insert _childs_ after last child of _parent_ element. Strings are are teplaced with `Text` elements.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => appendNodes(el, a));
});
```

### prependNodes

```typescript
function prependNodes(
  parent: ParentNode,
  ...children: ReadonlyArray<string | Node>
): void;
```

Insert _childs_ before first child of _parent_ element. Strings are are teplaced with `Text` elements.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => prependNodes(el, a));
});
```

### replaceNode

```typescript
function replaceNode(
  node: ChildNode,
  ...newNodes: ReadonlyArray<string | Node>
): void;
```

Replace _node_ with _newNodes_. Strings are replaced with `Text`s.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => replaceNode(el, a));
});
```

### removeNode

```typescript
function removeNode(node: ChildNode): void;
```

Removes _node_.

```typescript
querySelector('p').map(removeNode);
```

### cloneNode

```typescript
function cloneNode(node: Node, deep?: boolean): Node;
```

Clone node. If _deep_ is `true`, function returns node with all descendants. By default _deep_ is `false`.

```typescript
querySelector('p').map(cloneNode);
```

### addEventListener

```typescript
function addEventListener<E extends EventTarget, T extends keyof EventMapOf<E>>(
  element: E,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options: {
    add?: boolean | AddEventListenerOptions;
    remove?: boolean | EventListenerOptions;
  } = {}
): () => void;
```

Appends an event listener for events whose type attribute value is type.
The listener argument sets the callback that will be invoked when the event is dispatched.

`options.add` is options for native _addEventListener_ method and
`options.remove` is options for native _removeEventListener_ method.

Returns function that removes `listener` from `element`s
event listener list with same `type` and options.

```typescript
const removeClickOnParagraphListener /*: () => void */ = querySelector<
  HTMLParagraphElement
>('p')
  .map((p) => addEventListener(p, 'click', console.log))
  .extract();
```

### removeEventListener

```typescript
function removeEventListener<
  E extends EventTarget,
  T extends keyof EventMapOf<E>
>(
  element: E,
  type: T,
  listener: EventListenerOrEventListenerObject<E, T>,
  options?: boolean | EventListenerOptions
): void;
```

Removes the event listener in target's event listener list with the same type, callback, and options.

```typescript
removeEventListener(someElement, 'click', someListener);
```

### dispatchEvent

```typescript
function dispatchEvent<E extends EventTarget>(
  element: E,
  event: Event
): boolean;
```

Dispatches a synthetic event event to element and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

```typescript
dispatchEvent(someElement, new Event('click'));
```

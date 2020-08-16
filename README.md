# @fluss/web - make Web more functional and safe

`@fluss/web` - small library that contains couple functions for interacting with DOM in safe functional way.

## Example use

```typescript
const maybeBlock /*: Maybe<Element> */ = querySelector('.block'); // Result is wrapped in `Maybe` because `document.querySelector` may return null if element doesn't exist on the page.
```

## @fluss/web's advantages

- TypeScript included

TypeScript definitions are included in the library.

- Small size

# Install

```sh
npm i @fluss/web
```

## API

> In TypeScript examples is used [Flow](https://flow.org)'s comment notation if type is inferred.

### querySelector

```typescript
function querySelector<T extends Element = Element>(
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
function querySelectorAll<T extends Element = Element>(
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
function closest<T extends Element = Element>(
  selector: string,
  child: Element
): Maybe<T>;
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
function setAttribute(element: Element, key: string, value: string): void;
```

Set attribute for element.

```typescript
querySelector('div').map((el) => setAttribute(el, 'class', 'el'));
```

### getAttribute

```typescript
function getAttribute(element: Element, name: string): Maybe<string>;
```

Gets attribute value of element.

```typescript
const attributeValue /*: Maybe<string> */ = querySelector('div').chain((el) =>
  getAttribute(el, 'class')
);
```

### hasAttribute

```typescript
function hasAttribute(element: Element, name: string): boolean;
```

Checks if element has attribute.

```typescript
const hasElementAttribute /*: boolean */ = querySelector('div')
  .map((el) => hasAttribute(el, 'class'))
  .extract();
```

### removeAttribute

```typescript
function removeAttribute(element: Element, name: string): void;
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

### append

```typescript
function append(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void;
```

Insert _childs_ after last child of _parent_ element. Strings are are teplaced with `Text` elements.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => append(el, a));
});
```

### prepend

```typescript
function prepend(
  parent: ParentNode,
  ...childs: ReadonlyArray<string | Node>
): void;
```

Insert _childs_ before first child of _parent_ element. Strings are are teplaced with `Text` elements.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => prepend(el, a));
});
```

### replace

```typescript
function replace(
  node: ChildNode,
  ...newNodes: ReadonlyArray<string | Node>
): void;
```

Replace _node_ with _newNodes_. Strings are replaced with `Text`s.

```typescript
querySelector('p').map((el) => {
  createElement('a').map((a) => replace(el, a));
});
```

### replace

```typescript
export function remove(node: ChildNode): void;
```

Removes _node_.

```typescript
querySelector('p').map(remove);
```

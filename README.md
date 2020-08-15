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

> **Each function must have no more than 3 arguments.**

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

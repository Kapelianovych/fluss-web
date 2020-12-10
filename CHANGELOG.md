# Unreleased

### Changed

- Rename `addEventListener` to `on`.
- Rename `querySelector` to `query`.
- Rename `querySelectorAll` to `queryAll`.

## [0.8.1] - 2020-12-07

### Changed

- Bump `@fluss/core` version.

## [0.8.0] - 2020-11-29

### Added

- Event types for specific known events to `CommonEventMap` interface.

### Changed

- Separate functions as small modules.

### Removed

- `removeEventListener`, `appendNodes`, `prependNodes`, `cloneNode`, `replaceNode`, `removeNode` and `createElement` methods.

## [0.7.0] - 2020-10-21

### Added

- `string` type to _type_ parameter of `addEventListener` and `removeEventListener` functions.

### Changed

- All parameters that can be `Maybe` are nullable now.
- Bundle uses ES2018 features now.
- `hasAttribute`, `toggleAttribute`, `getAttribute`, `setAttribute` and `removeAttribute` have now overloaded type with common default types.

### Removed

- CommonJS version of package.

## [0.6.2] - 2020-10-08

### Fixed

- Improve `querySelector`, `querySelectorAll` and `createElement` types infering.

## [0.6.1] - 2020-10-07

### Fixed

- Bump packages and fix inner type bug in `addEventListener` function.

## [0.6.0] - 2020-10-02

### Changed

- `cloneNode` and `addEventListener` now return result wrapped in `Maybe` container if element is also wrapped in `Maybe`, otherwise they return direct result.

### Fixed

- `hasAttribute` and `toggleAttribute` now return _false_ if _element_ is absent (wrapped in `Maybe`).

## [0.5.3] - 2020-09-27

### Added

- `DOMContentLoaded` event to `Document`.
- Boolean attributes type `BooleanAttributesOf`.

### Changed

- `toggleAttribute` infer now boolean attributes of `element`'s type.

## [0.5.2] - 2020-09-04

### Fixed

- Custom attribute names are available to pass to `setAttribute`, `getAttribute`, `removeAttribute`, `hasAttribute` and `toggleAttribute` functions.
- `cloneNode` returns now proper type of cloned node.

## [0.5.1] - 2020-09-04

### Changed

- Functions accept `Maybe` instance with element now.

### Removed

- `dispatchEvent`, `createTextNode` functions.

## [0.5.0] - 2020-09-01

### Added

- `toggleAttribute` function.
- Names of possible attribute names to each HTML element.

### Changed

- Remove default type for element in `querySelector`, `querySelectorAll` and `closest` functions.

## [0.4.0] - 2020-08-31

### Changed

- `append` renamed to `appendNodes`.
- `prepend` renamed to `prependNodes`.

## [0.3.2] - 2020-08-25

### Fixed

- Fixed type of _listener_ in `addEventListener` and `removeEventListener` functions.

## [0.3.1] - 2020-08-25

### Added

- `EventOf` type.

### Changed

- Type signature of `addEventListener` and `removeEventListener` functions.
- Rename `AllEventMap` type to `EventMapOf`

## [0.3.0] - 2020-08-24

### Added

- `addEventListener`, `removeEventListener`, `dispatchEvent` function.

## [0.2.0] - 2020-08-16

### Added

- `setAttribute`, `getAttribute`, `hasAttribute`, `removeAttribute`, `append`, `prepend`, `replaceNode`, `removeNode`, `cloneNode` function.

## [0.1.1] - 2020-08-13

### Fixed

- typings of `closest`, `querySelector` and `querySelectorAll` functions.

## [0.1.0] - 2020-08-09

### Added

- `querySelector`, `querySelectorAll`, `closest`, `createElement`, `createTextNode` functions.

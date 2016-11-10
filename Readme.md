
# raf-debounce

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Debounced raf (requestAnimationFrame) function

## Installation

    $ npm install @f/raf-debounce

## Usage

```js
var rafDebounce = require('@f/raf-debounce')
var debouncedRender = rafDebounce(render)

subscribe(debouncedRender)
```

## API

### rafDebounce(fn)

- `fn` - The function you want to call no more than once every animation frame.

**Returns:** A debounced version of `fn` that runs only once every animation frame (at most). When called, that function returns a cancel function that can be used to cancel a pending debounce.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/raf-debounce.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/raf-debounce
[git-image]: https://img.shields.io/github/tag/micro-js/raf-debounce.svg?style=flat-square
[git-url]: https://github.com/micro-js/raf-debounce
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/raf-debounce.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/raf-debounce

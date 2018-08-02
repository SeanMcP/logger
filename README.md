# @seanmcp/logger

[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/seanmcp/logger)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/seanmcp/logger)

🌲 A simple console logger

## Why

`console.log` is a helpful way to quickly debug a problem in JavaScript. Writing logs, however, can get tedious. While developing, I find myself writing the following line frequently:

```javascript
console.log('myVar:', myVar);
```

`@seanmcp/logger` attempts to simplify this by reducing boilerplate.

## How

### Setup

```javascript
import log from '@seanmcp/logger';
// or
const log = require('@seanmcp/logger');
```

### Use

Use `log` in the place of `console.log`:

```javascript
log('myVar');
// does the same thing as
console.log('myVar:', myVar);
```

`log` takes a string and returns a log:

```javascript
const myVar = 'The value of myVar';
log('myVar');
// myVar: 'The value of myVar'

log(25);
// Uncaught TypeError: log function requires a string argument
```

## Caution

The `log` function relies on JavaScript's built-in `eval` function which dangerously executes any string it is passed. This can provide a security risk and should not be used in production. It is safe to `@seanmcp/logger` in development, but remember to remove the `import`/`require` in production.

## References

This package was inspired by [Jonathan Wood's](/Bamblehorse) article: ["How to make a beautiful, tiny npm package and publish it" (freeCodeCamp.org)](https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78).
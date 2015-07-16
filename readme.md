[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

convert 32 bit buffer (size 4 byte) to number (base 10).

Currently only support [big endian](https://en.wikipedia.org/wiki/Endianness#Big-endian).

Also checkout [to-unsigned-int32](https://github.com/chetandhembre/to-unsigned-int32)
## Install

```
npm i from-unsigned-int32
```
## API

1. Async API


  ```js
  var fromUInt32 = require('from-unsigned-int32')

  fromUInt32(buffr /*<Buffer 00 20 00 00 00 00 00 0c>*/, 4, function (err, res) {
  	console.log(res) //12
  })

  ```
  `buffr` should be Buffer.

  `offset` this is optional parameter default is 0.

  `callback` get two arguments:

  1. An error object.

  2. number (base 10).

2. Sync API

```js
var fromUInt32 = require('from-unsigned-int32')

console.log(fromUInt32.fromUInt32Sync(buffr /*<Buffer 00 20 00 00 00 00 00 0c>*/), 4)  //12

```
`buffr` should be Buffer.

`offset` this is optional parameter default is 0.

returns integer

## licence

MIT

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

convert 32 bit buffer (size 4 byte) to number (base 10).

Currently only support [big endian](https://en.wikipedia.org/wiki/Endianness#Big-endian).

Also checkout [to-unsigned-int32](https://github.com/chetandhembre/to-unsigned-int32)
## Install

```
npm i from-unsigned-int32
```
## Usage
```js
var fromUInt32 = require('from-unsigned-int32')

fromUInt32(buffr /*<Buffer 00 00 00 0c>*/, function (err, res) {
	console.log(res) //12
})

```
Module only support async api. 

`buffr` should be Buffer with length 4.

`callback` get two arguments:

1. An error object.

2. number (base 10).

## licence
===
MIT



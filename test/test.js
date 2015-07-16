var tap = require('tap')
var fromUInt32 = require('../')

tap.test('should return error when buffr is not type of Buffer', function (t) {
  fromUInt32('test', function (err, n) {
    t.type(err, Error)
    t.equal(err.message, 'buffr should be Buffer type', 'handling error when buffr is not type of Buffer')
    t.notOk(n, 'n should be null')
    t.end()
  })
})

tap.test('should return correct in integer when offset is specified', function (t) {
  var buffr = new Buffer(8)
  buffr.writeUInt32BE(12, 4)
  fromUInt32(buffr, 4, function (err, n) {
    t.notOk(err, 'err should not present')
    t.equal(n, 12)
    t.end()
  })
})

tap.test('should consider offset as 0 when offset is not provided', function (t) {
  var buffr = new Buffer(8)
  buffr.writeUInt32BE(12, 0)
  fromUInt32(buffr, function (err, n) {
    t.notOk(err, 'err should not present')
    t.equal(n, 12)
    t.end()
  })
})

tap.test('should return correct integer for given buffer', function (t) {
  var buffr = new Buffer(4)
  buffr.writeUInt32BE(12, 0)
  fromUInt32(buffr, function (err, n) {
    t.notOk(err, 'err should not present')
    t.equal(n, 12)
    t.end()
  })
})

tap.test('fromUInt32Sync: should return error when buffr is not type of Buffer', function (t) {
  t.throws(function () {fromUInt32.fromUInt32Sync('test')}, '1st argument should be Buffer type')
  t.end()
})

tap.test('fromUInt32Sync:should return correct in integer when offset is specified', function (t) {
  var buffr = new Buffer(8)
  buffr.writeUInt32BE(12, 4)
  var n = fromUInt32.fromUInt32Sync(buffr, 4)
  t.equal(n, 12)
  t.end()
})

tap.test('fromUInt32Sync:should return correct integer for given buffer', function (t) {
  var buffr = new Buffer(4)
  buffr.writeUInt32BE(12, 0)
  var n = fromUInt32.fromUInt32Sync(buffr)
  t.equal(n, 12)
  t.end()
})

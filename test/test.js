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

tap.test('should return error when buffr is not length of 4', function (t) {
  fromUInt32(new Buffer(8), function (err, n) {
    t.type(err, Error)
    t.equal(err.message, 'buffr should be length of 4', 'handling error when buffr is not length of 4')
    t.notOk(n, 'n should be null')
    t.end()
  })
})

tap.test('should return corrent integer for given buffer', function (t) {
  var buffr = new Buffer(4)
  buffr.writeUInt32BE(12, 0)
  fromUInt32(buffr, function (err, n) {
    t.notOk(err, 'err should not present')
    t.equal(n, 12)
    t.end()
  })
})

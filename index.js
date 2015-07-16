module.exports = fromUnSignedInt32
module.exports.fromUInt32Sync = fromUInt32Sync

var dz = require('dezalgo')

function fromUnSignedInt32 (buffr, offset, callback) {

  if (typeof offset === 'function') {
    callback = offset
    offset = 0
  }

  callback = dz(callback)

  if (!Buffer.isBuffer(buffr)) {
    return callback(new Error('buffr should be Buffer type'))
  }

  return callback(null, buffr.readUInt32BE(offset))
}

function fromUInt32Sync (buffr, offset) {
  if (!Buffer.isBuffer(buffr)) {
    throw new Error('1st argument should be Buffer type')
  }

  if (!offset) {
    offset = 0
  }
  return buffr.readUInt32BE(offset)
}

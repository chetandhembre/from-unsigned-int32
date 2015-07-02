var dz = require('dezalgo')

module.exports = function (buffr, callback) {
  callback = dz(callback)

  if (!Buffer.isBuffer(buffr)) {
    return callback(new Error('buffr should be Buffer type'))
  }

  if (buffr.length !== 4) {
    return callback(new Error('buffr should be length of 4'))
  }

  return callback(null, buffr.readUInt32BE(0))
}

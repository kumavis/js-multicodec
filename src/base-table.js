'use strict'

const varint = require('varint')

// spec and table at: https://github.com/multiformats/multicodec

// TODO revisit all of these once https://github.com/multiformats/multicodec/pull/16 is merged

exports = module.exports

// Miscellaneous
exports.raw = varintBuf(0)          // 0x00

// bases encodings

// Serialization formats
exports.protobuf = varintBuf(80)    // 0x50
exports.cbor = varintBuf(81)        // 0x51
exports.rlp = varintBuf(96)         // 0x60

// Multiformats
exports.multicodec = varintBuf(64)  // 0x40
exports.multihash = varintBuf(65)   // 0x41
exports.multiaddr = varintBuf(66)   // 0x42

// multihashes

// multiaddrs

// archiving formats

// image formats

// video formats

// VCS formats

// IPLD formats
exports['dag-pb'] = new Buffer('70', 'hex')
exports['dag-cbor'] = new Buffer('71', 'hex')
exports['eth-block'] = new Buffer('90', 'hex')
exports['eth-tx'] = new Buffer('91', 'hex')
exports['eth-account'] = new Buffer('92', 'hex')

function varintBuf (n) {
  return new Buffer(varint.encode(n))
}

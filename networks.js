var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f6a8a4f2'),
  addressVersion: 0x1c,
  privKeyVersion: 224,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6B08A8F54DE9426E8E9B28B763F5C6028EF3176D55567F2E1CF7678F52030000'),
    merkle_root: hex('C4C49295A2B5E314F024F7BD3D819E6C044BEB4E8754B0873C2CEBFA6398C77D'),
    height: 0,
    nonce: 1698998,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1409966599,
    bits: 504365040,
  },
  dnsSeeds: [
    'node1.cashdojo.com',
	'node2.cashdojo.com',
	'node3.cashdojo.com',
	'node4.cashdojo.com',
	'node5.cashdojo.com'
  ],
  defaultClientPort: 8018
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('1cd7f002'),
  addressVersion: 0x41,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('6B789770FB20A0262C18A35675A06450BB850CEB281A95A046B5E0D10438BE36'),
    merkle_root: hex('D8E288A08F808F7472B37BD13A3575522AD13D84E019746B24565D46A81B52D8'),
    height: 0,
    nonce: 2954005045,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1417037345,
    bits: 503840767,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18018
};

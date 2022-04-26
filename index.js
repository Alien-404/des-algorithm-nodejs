const { des } = require('./des/');

function stringToHex(s) {
  var r = '0x';
  var hexes = new Array(
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  );
  for (var i = 0; i < s.length; i++) {
    r += hexes[s.charCodeAt(i) >> 4] + hexes[s.charCodeAt(i) & 0xf];
  }
  return r;
}

function hexToString(h) {
  var r = '';
  for (var i = h.substr(0, 2) == '0x' ? 2 : 0; i < h.length; i += 2) {
    r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
  }
  return r;
}

const key = 'rahasia';
const message = 'pesan ini akan di eknripsi';

const ciphertext = des(key, message, 1, 0);
console.log(`DES encrypt in hexa : ${stringToHex(ciphertext)}`);

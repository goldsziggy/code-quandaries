/**
 Here is a string of bytes encoded in hex:
3d2e212b20226f3c2a2a2b
These bytes have been encrypted with a cunning cipher: each character has been XOR'd with 79 (decimal). In cryptography, '79' is referred to as the 'key'.
To decrypt it, perform the same XOR again. This will reveal your answer.

Hints:
1. The string is a series of hex bytes.  A hexadecimal character represents 4 bits, and there are 8 bits in a byte.  So every 2 characters will be your hex byte
2. After retreiving each byte (every 2 characters), you will need to parse it as an integer prior to XORing it.
3. if you've done the above you have a series of numbers, each number refers to an ASCII character, just print each one converting to ascii!
 */

const xor = str => {
  let s = ''
  const bytes = []
  for (var i = 0; i < str.length; i += 2) {
    bytes.push('0x' + str.substr(i, 2))
  }
  bytes.forEach(b => {
    const xored = parseInt(b, 16) ^ 79
    console.log(b, xored, String.fromCharCode(xored))
    s += String.fromCharCode(xored)
  })
  return s
}

console.log(xor('3d2e212b20226f3c2a2a2b'))

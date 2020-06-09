/**
 Your friend Johnny is the owner of 'Fresho', a well known gelato parlour in town.
Business has dropped recently however, as two new gelato parlours have opened nearby: 'Freshy' and 'Mama's Gelato'.
Johnny suspects that these new parlours are colluding and fixing their prices.
Today the owner of Mama's Gelato ACCIDENTLY sent Johnny a suspicious email:
"ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk"
'///instructions:///'
"rot only lowercase a to z"
Your task:
Write a method that takes this encrypted email and returns the decrypted message.
Good luck, Johnny is counting on you.
--hint--
if this email is indeed about price fixing, consider the kinds of words it would include
Additional cypher tests:
#Note that these will not be included in the final test cases 
Test.assert_equals(crack('jxyijuijsqiufqiiut'),  'thistestcasepassed')
Test.assert_equals(crack('btejeuijtuftu'),  'asdidthistest')
Test.assert_equals(crack('naqguvfgrfg'),  'andthistest')
Source: https://www.codewars.com/kata/55ff2ca7d49961915600000e
 */

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const word = 'fresh'
const charCodes = word.split('').map((char) => char.charCodeAt(0))
const differences = charCodes.reduce((acc, val, idx) => {
  if (idx < charCodes.length) {
    acc.push(Math.abs(val - charCodes[idx + 1]))
  }
  return acc
}, [])
console.log({ charCodes, differences })
/**
 *
 * @param {String} code
 */
function crack(code) {
  // look for the word mama, where two same chars seperated like that
  const chars = code.split('')
  let matchFoundIdx = 0
  chars.forEach((char, idx) => {
    // try to find mama, where the two chars repeat
    if (char === chars[(idx + 2) % chars.length]) {
      console.log({ char, idx })
    }

    // try to find freshy, comparing distance in letters
    if (
      Math.abs(char.charCodeAt(0) - chars[(idx + 1) % chars.length].charCodeAt(0)) ===
      differences[matchFoundIdx]
    ) {
      console.log({
        char,
        idx,
        matchFoundIdx,
        charCode: char.charCodeAt(0),
        nextChar: chars[(idx + 1) % chars.length],
        nextCharCode: chars[(idx + 1) % chars.length].charCodeAt(0),
        difference: differences[matchFoundIdx],
      })
      matchFoundIdx++
    } else {
      matchFoundIdx = 0
    }
  })
  // 7
  // for (let i = 0; i < alphabet.length; i++) {
  //   console.log(
  //     code
  //       .split('')
  //       .map((char) => alphabet[(alphabet.indexOf(char) + i) % alphabet.length])
  //       .join(''),
  //     i
  //   )
  // }
  return code
    .split('')
    .map((char) => alphabet[(alphabet.indexOf(char) + 7) % alphabet.length])
    .join('')
  return code
}

describe('A reverse-binary challenge', () => {
  //   it('should work for case 1', () => {
  //     expect(crack('jxyijuijsqiufqiiut')).toEqual('thistestcasepassed')
  //   })
  //   it('should work for case 2', () => {
  //     expect(crack('btejeuijtuftu')).toEqual('asdidthistest')
  //   })
  //   it('should work for case 3', () => {
  //     expect(crack('naqguvfgrfg')).toEqual('andthistest')
  //   })
  it('should work for case 4', () => {
    expect(
      crack(
        'ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk'
      )
    ).toEqual('')
  })
})

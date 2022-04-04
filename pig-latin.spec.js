/**
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Source: https://www.codewars.com/kata/520b9d2ad5c005041100000f */

/**
 *
 * @param {String} code
 */

function pigIt (words) {
  // const firstLetter = word.charAt(0)
  // const restOfWord = word.slice(1)
  return words
    .split(' ')
    .map((word) => {
      const firstLetter = word.charAt(0)
      // const match = /(?:.(?![a-zA-Z]))+$/.exec(word)

      // console.log(match)
      return /[a-zA-Z]/.exec(word) ? word.slice(1) + firstLetter + 'ay' : word
    })
    .join(' ')

  // const match = /(?:.(?![a-zA-Z]))+$/.exec(restOfWord)
  // console.log(match)
  // return (
  //   restOfWord.slice(0, match.index) +
  //   firstLetter +
  //   restOfWord.slice(match.index) +
  //   'ay'
  // )
  // return restOfWord + firstLetter + 'ay'
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
  })
  it('should work for case 2', () => {
    expect(pigIt('Hello world !')).toEqual('elloHay orldway !')
  })
})

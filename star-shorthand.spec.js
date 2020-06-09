/**
Star Shorthand
Write a function that converts a string into star shorthand. If a character is repeated n times, convert it into character*n.
Examples
toStarShorthand("abbccc") ➞ "ab*2c*3"
toStarShorthand("77777geff") ➞ "7*5gef*2"
toStarShorthand("abc") ➞ "abc"
toStarShorthand("") ➞ ""
Notes
Leave lone occurrences of a character as is.
Return an empty string if given an empty string input.
Source: https://edabit.com/challenge/skaEqSDppmQqApNQu
 */

/**
 *
 * @param {String} str
 */
const toStarShorthand = (str) => {
  const set = str.split('').reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1
    return acc
  }, {})

  return Object.keys(set)
    .map((char) => (set[char] > 1 ? `${char}*${set[char]}` : char))
    .join('')
}

describe('A star shorthand challenge', () => {
  it('should work for case 1', () => {
    expect(toStarShorthand('abbccc')).toEqual('ab*2c*3')
  })
  it('should work for case 2', () => {
    expect(toStarShorthand('77777geff')).toEqual('7*5gef*2')
  })
  it('should work for case 3', () => {
    expect(toStarShorthand('abc')).toEqual('abc')
  })
})

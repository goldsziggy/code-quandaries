/**
Crack the Code
This is a reverse-coding challenge. Create a function that outputs the correct array from the input. Use the following examples to crack the code.
Examples
"hello" ➞ [5, 2, 9, 9, 3]
"wonderful" ➞ [11, 3, 2, 1, 2, 6, 3, 9, 9]
"something challenging" ➞ [7, 3, 10, 2, 8, 5, 6, 2, 4, 5, 18, 5, 16, 9, 9, 2, 2, 4, 6, 2, 4]
Sourcee: https://edabit.com/challenge/NNqAzPWi5v4HfTC9k
 */

/**
 *
 * @param {String} word
 */
const crackTheCode = (word) => {
  return word.split('').map((c) =>
    c
      .charCodeAt(0)
      .toString()
      .split('')
      .reduce((acc, v) => Number(acc) + Number(v), 0)
  )
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(crackTheCode('hello')).toEqual([5, 2, 9, 9, 3])
  })
  it('should work for case 2', () => {
    expect(crackTheCode('wonderful')).toEqual([11, 3, 2, 1, 2, 6, 3, 9, 9])
  })
  it('should work for case 3', () => {
    expect(crackTheCode('something challenging')).toEqual([
      7,
      3,
      10,
      2,
      8,
      5,
      6,
      2,
      4,
      5,
      18,
      5,
      16,
      9,
      9,
      2,
      2,
      4,
      6,
      2,
      4,
    ])
  })
})

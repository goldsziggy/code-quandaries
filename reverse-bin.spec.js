/**
 Write a function that reverses the bits in an integer.
For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
You can assume that the number is not negative.
Source: https://www.codewars.com/kata/5959ec605595565f5c00002b
 */

/**
 *
 * @param {Number} num
 */
function reverse(num) {
  return parseInt(num.toString(2).split('').reverse().join(''), 2)
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(reverse(417)).toEqual(267)
  })
})

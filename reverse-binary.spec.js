/**
Reversing a Binary String
Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
Examples
reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5
reversedBinaryInteger(12) ➞ 3
// 12 = 1100 -> 0011 = 3
reversedBinaryInteger(25) ➞ 19
// 25 = 11001 -> 10011 = 19
(45) ➞ 45
// 45 = 101101 -> 101101 = 45
Notes
All values of n will be positive.


 */

/**
 *
 * @param {Number} num
 */
const reversedBinaryInteger = (num) => {
  return parseInt(num.toString(2).split('').reverse().join(''), 2)
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(reversedBinaryInteger(10)).toEqual(5)
  })
  it('should work for case 2', () => {
    expect(reversedBinaryInteger(12)).toBe(3)
  })
  it('should work for case 3', () => {
    expect(reversedBinaryInteger(25)).toBe(19)
  })
})

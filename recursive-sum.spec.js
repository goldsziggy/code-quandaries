/**
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
source: https://www.codewars.com/kata/541c8630095125aba6000c00
*/

/**
 *
 * @param {Number} num
 */
function digital_root(num) {
  const n = num
    .toString()
    .split('')
    .reduce((acc, val) => {
      acc += parseInt(val)
      return acc
    }, 0)
  if (n < 10) return n
  return digital_root(n)
}

describe('A recursive sum', () => {
  it('should work for case 1', () => {
    expect(digital_root(16)).toEqual(7)
  })
  it('should work for case 2', () => {
    expect(digital_root(942)).toEqual(6)
  })
  it('should work for case 3', () => {
    expect(digital_root(132189)).toEqual(6)
  })
  it('should work for case 4', () => {
    expect(digital_root(493193)).toEqual(2)
  })
})

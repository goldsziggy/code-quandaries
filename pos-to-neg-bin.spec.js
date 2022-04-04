/**
Positive to negative binary numbers

Given an array of ones and zero(e)s that represents a positive binary number, convert the number to two's complement value.

Two's complement is the way most computers represent positive or negative integers. The most significant bit is 1 if the number is negative, and 0 otherwise.

Examples:

[1,1,1,1] = -1

[1,0,0,0] = -8

[1,1,0,1] = -3

To get the two's complement negative notation of an integer, you take the number in binary.

You then flip the bits, and add one (with carry) to the result.

For example:

[0,0,1,0] = 2 in base 10

[1,1,0,1] <- Flip the bits

Add 1 (with carry):

[1,1,1,0] = -2

The output array must have the same length as the input array.

assert.deepStrictEqual(positiveToNegative([0, 1, 0, 0, 1]), [1, 0, 1, 1, 1]);
    assert.deepStrictEqual(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
    assert.deepStrictEqual(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
    assert.deepStrictEqual(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
    assert.deepStrictEqual(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);

Source: https://www.codewars.com/kata/5becace7063291bebf0001d5

 */

/**
 *
 * @param {Number} num
 */
function positiveToNegative (binArr) {
  const flipped = binArr.map((x) => (x === 1 ? 0 : 1))
  const reversed = flipped.reverse()
  let carry = 1
  const result = reversed.map((x, i) => {
    if (carry === 1 && x === 1) {
      return 0
    } else if (carry === 1) {
      carry = 0
      return 1
    }
    return x
  })
  return result.reverse()
}

describe('All Balanced Parens code-test', () => {
  it('should handle case 1', () => {
    expect(positiveToNegative([0, 1, 0, 0, 1])).toEqual([1, 0, 1, 1, 1])
  })
  it('should handle case 2', () => {
    expect(positiveToNegative([0, 0, 0, 0])).toEqual([0, 0, 0, 0])
  })
})

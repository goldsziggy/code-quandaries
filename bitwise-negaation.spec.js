/**
Bitwise Logical Negation
Given a number (positive, negative, or 0), return the logical negation (as a 1 or 0) of that number. Do so using only bitwise operators:
(~, &, |, ^, >>, <<, etc) and +
Any of these characters/constructs are not allowed:
if, do, while, for, -, not, or, and, is, [,] and any functions.
Examples
bitwise_logical_negation(1) ➞ 0
bitwise_logical_negation(5) ➞ 0
bitwise_logical_negation(0) ➞ 1
bitwise_logical_negation(3) ➞ 0
Notes
Use as few operators as possible for more of a challenge.
Source: https://edabit.com/challenge/JzXH3QnwHmpptadQr
 */

/**
 *
 * @param {Number} number
 */
const bitwiseLogicalNegation = (n) => {
  const binary = n.toString('2')
  const val = 0x1 >> n
  console.log({ binary, test: val.toString(2) })

  return val
}

describe('The complete-the-word challenge', () => {
  it('should handle butl', () => {
    expect(bitwiseLogicalNegation(1)).toBe(0)
  })
  it('should handle butlz', () => {
    expect(bitwiseLogicalNegation(5)).toBe(0)
  })
  it('should handle tulb', () => {
    expect(bitwiseLogicalNegation(0)).toBe(1)
  })

  it('should hanlde bbutl', () => {
    expect(bitwiseLogicalNegation(3)).toBe(0)
  })
})

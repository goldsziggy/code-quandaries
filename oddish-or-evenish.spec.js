/// <reference types="jest" />

/**
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
Examples
oddishOrEvenish(43) ➞ "Oddish"
oddishOrEvenish(373) ➞ "Oddish"
oddishOrEvenish(4433) ➞ "Evenish"
Notes
N/A
Credit: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
 */

/**
 * @param {Number} num
 */
const oddishOrEvenish = num =>
  num
    .toString()
    .split('')
    .reduce((acc, val) => acc + +val, 0) %
    2 ===
  0
    ? 'Evenish'
    : 'Oddish'

describe('Oddish or Evenish code-test', () => {
  it('should handle 43', () => {
    const answer = oddishOrEvenish(43)
    expect(answer).toBe('Oddish')
    expect(oddishOrEvenish(373)).toBe('Oddish')
    expect(oddishOrEvenish(4433)).toBe('Evenish')
  })
})

/**
 Create a function that returns the simplified version of a fraction.
Examples
simplify("4/6") ➞ "2/3"
simplify("10/11") ➞ "10/11"
simplify("100/400") ➞ "1/4"
simplify("8/4") ➞ "2"
Notes
A fraction is simplified if there are no common factors (except 1) between the numerator and the denominator. For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
If improper fractions can be transformed into integers, do so in your code (see example #4).
Source: https://edabit.com/challenge/ZNnfzsWj5i6S93Cxk


 */

const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }

  return getGcd(b, a % b)
}

/**
 * @param {String} fraction
 */
const simplify = (fraction) => {
  const [numereator, denominator] = fraction.split('/').map((v) => parseInt(v))

  const gcd = getGcd(numereator, denominator)

  return numereator > denominator
    ? `${numereator / denominator}`
    : `${numereator / gcd}/${denominator / gcd}`
}

describe('A simplify fraction test', () => {
  it('should handle 4/6', () => {
    expect(simplify('4/6')).toBe('2/3')
  })
  it('should handle 10/11', () => {
    expect(simplify('10/11')).toBe('10/11')
  })
  it('should handle 100/400', () => {
    expect(simplify('100/400')).toBe('1/4')
  })

  it('should hanlde 8/4', () => {
    expect(simplify('8/4')).toBe('2')
  })
})

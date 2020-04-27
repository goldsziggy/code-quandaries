/**
Check if the Same Case
Create a function that returns true if an input string contains only uppercase or only lowercase letters.
Examples
SameCase("hello") ➞ true
SameCase("HELLO") ➞ true
SameCase("Hello") ➞ false
SameCase("ketcHUp") ➞ false
Source: https://edabit.com/challenge/ivaEWKZbFMcR8emJ8
 */

/**
 * @param {String} word
 */
const sameCase = (word) => {
  let score = 0
  for (let i = 0; i < word.length; i++) {
    const v = word.charAt(i)
    const num = v.toUpperCase() === v ? 1 : 0
    score += num
  }

  return score === word.length || score === 0
}

describe('A Captial Challenge code-test', () => {
  it('should handle hello', () => {
    expect(sameCase('hello')).toBe(true)
  })
  it('should handle HELLO', () => {
    expect(sameCase('HELLO')).toBe(true)
  })
  it('should handle Hello', () => {
    expect(sameCase('Hello')).toBe(false)
  })

  it('should hanlde ketcHUp', () => {
    expect(sameCase('ketcHUp')).toBe(false)
  })
})

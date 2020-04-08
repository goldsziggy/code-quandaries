/**
 A Capital Challenge
Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.
To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".
Examples
selectLetters("heLLO", "GUlp") ➞ "help"
selectLetters("1234567", "XxXxX")  ➞ "135"
selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"
Notes
The strings don't have to be the same length.
Strings can contain non-alphabetic characters.
Source; https://edabit.com/challenge/gjKemfXwedir9y7D4
 */

const isUpperCase = (string) => /^[A-Z]*$/.test(string)

/**
 * @param {String} word1
 * @param {String} word2
 */
const selectLetters = (word1, word2) => {
  const left = word2.split('').reduce((acc, val, idx) => {
    if (isUpperCase(val) && idx < word2.length) {
      return acc + word1[idx]
    }
    return acc
  }, '')
  const right = word1.split('').reduce((acc, val, idx) => {
    if (isUpperCase(val) && idx < word2.length) {
      return acc + word2[idx]
    }
    return acc
  }, '')
  return left + right
}

describe('A Captial Challenge code-test', () => {
  it('should handle heLLO", "GUlp', () => {
    expect(selectLetters('heLLO', 'GUlp')).toBe('help')
  })
  it('should handle 1234567", "XxXxX', () => {
    expect(selectLetters('1234567', 'XxXxX')).toBe('135')
  })
  it('should handle EVERYTHING", "SomeThings', () => {
    expect(selectLetters('EVERYTHING', 'SomeThings')).toBe('EYSomeThings')
  })
})

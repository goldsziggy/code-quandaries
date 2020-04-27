/**
 Longest Substring with Non-repeating Characters
Write a function that returns the longest non-repeating substring for a string input.

Examples
longestNRS("abcabcbb") ➞ "abc"

longestNRS("aaaaaa") ➞ "a"

longestNRS("abcde") ➞ "abcde"

longestNRS("abcda") ➞ "abcd"
Notes
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?

Source: https://edabit.com/challenge/WFQvbjeXRZeontieP
 */

/**
 * @param {String} word
 */
const longestNRS = (word) => {
  let longestWord = ''
  let wordStack = []

  for (let i = 0; i < word.length; i++) {
    if (!longestWord.includes(word.charAt(i))) {
      longestWord += word.charAt(i)
    } else {
      wordStack.push(longestWord)

      if (longestWord.length > 1) {
        longestWord = longestWord.slice(longestWord.indexOf(word.charAt(i)) + 1) + word.charAt(i)
      } else {
        longestWord = ''
      }
    }
  }
  wordStack.push(longestWord)
  wordStack.sort((a, b) => b.length - a.length)

  return wordStack[0]
}

describe('A Captial Challenge code-test', () => {
  it('should handle abcabcbb', () => {
    expect(longestNRS('abcabcbb')).toBe('abc')
  })
  it('should handle aaaaaa', () => {
    expect(longestNRS('aaaaaa')).toBe('a')
  })
  it('should handle abcde', () => {
    expect(longestNRS('abcde')).toBe('abcde')
  })

  it('should hanlde abcda', () => {
    expect(longestNRS('abcda')).toBe('abcd')
  })
  it('should habdle abcada', () => {
    expect(longestNRS('abcada')).toBe('bcad')
  })
})

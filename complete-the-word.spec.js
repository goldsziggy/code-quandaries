/**
 Complete the Word
An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.

Create a function that, given an input string, determines if the word can be completed.

Examples
canComplete("butl", "beautiful") ➞ true
// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".

canComplete("butlz", "beautiful") ➞ false
// "z" does not exist in the word beautiful.

canComplete("tulb", "beautiful") ➞ false
// Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.

canComplete("bbutl", "beautiful") ➞ false
// Too many "b"s, beautiful has only 1.
Notes
Both string input and word will be lowercased.

Source: https://edabit.com/challenge/Hx8tidhX6gXNK56aF
 */

/**
 *
 * @param {String} partial
 * @param {String} word
 */
const canComplete = (partial, word) => {
  let completable = true
  partial.split('').forEach((char, index) => {
    if (!word.includes(char) || (word.indexOf(char) <= word.lastIndexOf('|') && index > 0)) {
      completable = false
    } else {
      word = word.replace(char, '|')
    }
  })

  return completable
}

describe('The complete-the-word challenge', () => {
  it('should handle butl', () => {
    expect(canComplete('butl', 'beautiful')).toBe(true)
  })
  it('should handle butlz', () => {
    expect(canComplete('butlz', 'beautiful')).toBe(false)
  })
  it('should handle tulb', () => {
    expect(canComplete('tulb', 'beautiful')).toBe(false)
  })

  it('should hanlde bbutl', () => {
    expect(canComplete('bbutl', 'beautiful')).toBe(false)
  })
})

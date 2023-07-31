/**
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

JEST
describe('is-pangram', () => {
  it('should return 23 when input is 10', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog')).toEqual(true)
    expect(isPangram('hello world')).toEqual(false)
  })
})
 */
const isPangram = (phrase: string): boolean => {
  const set = new Set()
  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase()

    if (char >= 'a' && char <= 'z') {
      set.add(char)
    }
    if (set.size === 26) return true
  }
  return set.size === 26
}

describe('is-pangram', () => {
  it('should return 23 when input is 10', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog')).toEqual(true)
    expect(isPangram('hello world')).toEqual(false)
  })
})

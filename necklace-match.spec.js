/**
[2020-03-09] Challenge #383 [Easy] Necklace matching
Challenge
Imagine a necklace with lettered beads that can slide along the string. Here's an example image. In this example, you could take the N off NICOLE and slide it around to the other end to make ICOLEN. Do it again to get COLENI, and so on. For the purpose of today's challenge, we'll say that the strings "nicole", "icolen", and "coleni" describe the same necklace.

Generally, two strings describe the same necklace if you can remove some number of letters from the beginning of one, attach them to the end in their original ordering, and get the other string. Reordering the letters in some other way does not, in general, produce a string that describes the same necklace.

Write a function that returns whether two strings describe the same necklace.

Examples
same_necklace("nicole", "icolen") => true
same_necklace("nicole", "lenico") => true
same_necklace("nicole", "coneli") => false
same_necklace("aabaaaaabaab", "aabaabaabaaa") => true
same_necklace("abc", "cba") => false
same_necklace("xxyyy", "xxxyy") => false
same_necklace("xyxxz", "xxyxz") => false
same_necklace("x", "x") => true
same_necklace("x", "xx") => false
same_necklace("x", "") => false
same_necklace("", "") => true
Source: https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/
 */

/**
 *
 * @param {String} a
 * @param {String} b
 */
const same_necklace = (a, b) => {
  const wordArr = a.split('')
  for (let i = 0; i < wordArr.length; i++) {
    wordArr.push(wordArr.shift())
    if (wordArr.join('') === b) {
      return true
    }
  }

  return a === b
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(same_necklace('nicole', 'icolen')).toEqual(true)
  })
  it('should handle 1', () => {
    expect(same_necklace('nicole', 'lenico')).toEqual(true)
  })
  it('should handle 2', () => {
    expect(same_necklace('nicole', 'coneli')).toEqual(false)
  })

  it('should hanlde 3', () => {
    expect(same_necklace('aabaaaaabaab', 'aabaabaabaaa')).toEqual(true)
  })
  it('should hanlde 4', () => {
    expect(same_necklace('x', 'xx')).toEqual(false)
  })
  it('should hanlde 5', () => {
    expect(same_necklace('', '')).toEqual(true)
  })
})

/**
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

    For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

Constraints:

    1 <= s.length, goal.length <= 2 * 104
    s and goal consist of lowercase letters.

 https://leetcode.com/problems/buddy-strings/
*/

function buddyStrings (s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  const missMatchedSLetters: string[] = []
  const missMatchedGoalSetters: string[] = []
  const uniques = {}
  let hasDuplicate = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      missMatchedGoalSetters.push(goal[i])
      missMatchedSLetters.push(s[i])
    }
    uniques[s[i]] = uniques[s[i]] + 1 || 1
    if (uniques[s[i]] > 1) hasDuplicate = true
  }

  console.log({ missMatchedGoalSetters, missMatchedSLetters })
  if (s !== goal && missMatchedGoalSetters.length === 2 && missMatchedGoalSetters.reverse().every((val, index) => val === missMatchedSLetters[index])) return true
  if (s === goal && hasDuplicate) return true

  return false
}

describe('buddy-strings', () => {
  it('should work', () => {
    expect(buddyStrings('ab', 'ba')).toEqual(true)
    expect(buddyStrings('ab', 'ab')).toEqual(false)
    expect(buddyStrings('aa', 'aa')).toEqual(true)
    expect(buddyStrings('abcd', 'badc')).toEqual(false)
    expect(buddyStrings('abcaa', 'abcbb')).toEqual(false)
    expect(buddyStrings('abab', 'baba')).toEqual(false)
  })
})

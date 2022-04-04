/**
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.

Sample Tests:
Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
Source: https://edabit.com/challenge/ivaVEWKZbFMcR8emJ8
 */

/**
 * @param {String} word
 */
const like = (friends) => {
  const namedFriends = friends.splice(0, 2)
  const appendString = ` like${namedFriends.length <= 1 ? 's' : ''} this`

  if (namedFriends.length === 0) {
    return 'No one likes this'
  }
  const likeStr =
    namedFriends.join(', ') +
    (friends.length > 1
      ? ` and ${friends.length} others`
      : namedFriends.length === 2 && friends.length > 0
        ? ` and ${friends[0]}`
        : friends[0] || '') +
    appendString

  if (
    (likeStr.match(/,/g) || []).length === 1 &&
    (likeStr.match(/(and)/g) || []).length === 0
  ) {
    return likeStr.replace(/,/g, ' and')
  }
  return likeStr
}

describe('A FB Like code-test', () => {
  it('should handle no one', () => {
    expect(like([])).toBe('No one likes this')
  })
  it('should handle 1 user', () => {
    expect(like(['Peter'])).toBe('Peter likes this')
  })
  it('should handle 2 users', () => {
    expect(like(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
  })

  it('should hanlde 3 users', () => {
    expect(like(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
  })
  it('should hanlde 4 users', () => {
    expect(like(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
      'Alex, Jacob and 2 others like this'
    )
  })
})

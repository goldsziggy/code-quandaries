/**
You are given an input string.
For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it...
But will your code be performant enough?
Examples:
input   =  "Hello, World!"
result  =  "1112111121311"
input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string.
Source: https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript
 */

/**
 *
 * @param {String} code
 */
function numericals(word) {
  let set = {}
  return word
    .split('')
    .map((char) => {
      set[char] = set[char] + 1 || 1
      return set[char]
    })
    .join('')
}

describe('A numerical of string', () => {
  it('should work for case 1', () => {
    expect(numericals('Hello, World!')).toEqual('1112111121311')
  })
  it('should work for case 2', () => {
    expect(numericals("Hello, World! It's me, JomoPipi!")).toEqual(
      '11121111213112111131224132411122'
    )
  })
  it('should work for case 3', () => {
    expect(numericals('hello hello')).toEqual('11121122342')
  })
  it('should work for case 4', () => {
    expect(numericals('aaaaaaaaaaaa')).toEqual('123456789101112')
  })
})

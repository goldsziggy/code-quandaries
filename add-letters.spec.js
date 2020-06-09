/**
 Your task is to add up letters to one letter.

The function will be given an array of single character Strings, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters("a", "b", "c") = "f"
addLetters("a", "b") = "c"
addLetters("z") = "z"
addLetters("z", "a") = "a"
addLetters("y", "c", "b") = "d" // notice the letters overflowing
addLetters() = "z"


if you are doing this in JS, try to keep that method signature!
source: https://www.codewars.com/kata/5d50e3914861a500121e1958/javascript
 */

/**
 *
 * @param {String} code
 */
function addLetters(...letters) {
  if (letters.length > 0) {
    const val = letters.reduce((acc, char) => {
      acc += char.charCodeAt(0) - '`'.charCodeAt(0)
      return acc
    }, 0)
    const charCode = '`'.charCodeAt(0) + (val > 26 ? val % 26 : val)
    return String.fromCharCode(charCode)
  }
  return 'z'
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(addLetters('a', 'b', 'c')).toEqual('f')
  })
  it('should work for case 2', () => {
    expect(addLetters('a', 'b')).toEqual('c')
  })
  it('should work for case 3', () => {
    expect(addLetters('z')).toEqual('z')
  })
  it('should work for case 4', () => {
    expect(addLetters('z', 'a')).toEqual('a')
  })
  it('should work for case 5', () => {
    expect(addLetters('y', 'c', 'b')).toEqual('d')
  })
  it('should work for case 6', () => {
    expect(addLetters()).toEqual('z')
  })
})

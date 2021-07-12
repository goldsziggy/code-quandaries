/**
Do names have colors?
Now they do.
Make a function that takes in a name (Any string two chars or longer really, but the name is the idea) and use the ascii values of it's substrings to produce the hex value of its color! Here is how it's going to work:
The first two hexadecimal digits are the SUM of the value of characters (modulo 256).
The second two are the PRODUCT of all the characters (again, modulo 256, which is one more than FF in hexadecimal).
The last two are the ABSOLUTE VALUE of the DIFFERENCE between the first letter, and the sum of every other letter. (I think you get the idea with the modulo thing).
For example "Jack" returns "79CAE5", which is... baby blue!
"Jack"  #  "J" = 74, "a" = 97, "c" = 99, "k" = 107
74 + 97 + 99 + 107 = 377                   -->  mod 256 = 121  -->  hex: 79
74 * 97 * 99 * 107 = 76036554              -->  mod 256 = 202  -->  hex: CA
74 - (97 + 99 + 107) = -229  --> abs: 229  -->  mod 256 = 229  -->  hex: E5
NOTE: The function should return None/nil when the input is less than two chars.

Source: https://www.codewars.com/kata/5705c699cb729350870003b7
 */

/**
 *
 * @param {String} name
 */
function whatColor(name) {
  const chars = name.split('')
  const result = chars.reduce(
    (acc, char, idx) => {
      acc.b += char.charCodeAt(0)
      acc.m *= char.charCodeAt(0)
      acc.e -= idx === 0 ? 0 : char.charCodeAt(0)
      return acc
    },
    { b: 0, m: 1, e: chars[0].charCodeAt(0) }
  )

  const begin = (result.b % 256).toString(16).toUpperCase().padStart(2, '0')
  const middle = (result.m % 256).toString(16).toUpperCase().padStart(2, '0')
  const end = Math.abs(result.e % 256)
    .toString(16)
    .toUpperCase()
    .padStart(2, '0')
  return `${begin}${middle}${end}`
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(whatColor('Loki')).toEqual('79CAE5')
  })
  it('should handle Matthew', () => {
    expect(whatColor('Matthew')).toEqual('DA8040')
  })
  it('should handle Maximilian', () => {
    expect(whatColor('Maximilian')).toEqual('09006F')
  })
})

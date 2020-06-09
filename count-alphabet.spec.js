/**
Take an input string and return a string that is made up of the number of occurances of each english letter in the input, followed by that letter. The string shouldn't contain zeros; leave them out.
An empty string, or one with no letters, should return an empty string.
Notes:
the input will always be valid;
treat letters as case-insensitive
Examples
"This is a test sentence."  ==>  "1a1c4e1h2i2n4s4t"
""                          ==>  ""
"555"                       ==>  ""
Source: https://www.codewars.com/kata/59e19a747905df23cb000024
 */

/**
 *
 * @param {String} str
 */
const countAlpha = (str) => {
  const parsed = str.split('').reduce((acc, val) => {
    const lower = val.toLowerCase()
    if (/[a-z]/.test(lower)) {
      acc[lower.charCodeAt(0)] = acc[lower.charCodeAt(0)] + 1 || 1
    }
    return acc
  }, {})

  return Object.keys(parsed).reduce((acc, val) => {
    acc += parsed[val] + String.fromCharCode(parseInt(val))
    return acc
  }, '')
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(countAlpha('This is a test sentence')).toEqual('1a1c4e1h2i2n4s4t')
  })
  it('should work for case 2', () => {
    expect(countAlpha('')).toEqual('')
  })
  it('should work for case 3', () => {
    expect(countAlpha('555')).toEqual('')
  })
})

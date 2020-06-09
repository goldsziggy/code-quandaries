/**
RegEx: Character Classes X ⁠- \W
You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
Here are a list of the characters classes in JavaScript:
., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.
Find out how many <div> elements are used in a string. Use the character class \W in your expression.
Example
const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
// 2 times
const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
// 2 times
const str = "<div></div>"
// 1 time
SOURCE: https://edabit.com/challenge/YxsH3nB9Z5n5Tbupd
 */

function htmlDetector(str) {
  return str.match(/\W?\/div\W/g).length
}

describe('A find divs in a string', () => {
  it('should work for case 1', () => {
    expect(htmlDetector('<div>Hello.</div><div>My name is <b>George</b>.</div>')).toEqual(2)
  })
  it('should work for case 2', () => {
    expect(htmlDetector('<div><h1>The Word for Today</h1><div>aardvark</div></div>')).toEqual(2)
  })
  it('should work for case 3', () => {
    expect(htmlDetector('<div></div>')).toEqual(1)
  })
})

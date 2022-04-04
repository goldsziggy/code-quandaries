/**
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

Source: https://www.codewars.com/kata/5264d2b162488dc400000001
*/

/**
 *
 * @param {String} code
 */

function spinWords (words) {
  return words.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(spinWords('Hey fellow warriors')).toEqual('Hey wollef sroirraw')
  })
  it('should work for case 2', () => {
    expect(spinWords('This is a test')).toEqual('Hello world !')
  })
})


/**
Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000.Source: https://www.codewars.com/kata/5becace7063291bebf0001d5

 */

/**
 *
 * @param {Number} num
 */
function addUp (num) {
  if (num === 0) return 0
  return addUp(num - 1) + num
}

describe('All Balanced Parens code-test', () => {
  it('should handle case 1', () => {
    expect(addUp(4)).toEqual(10)
  })
  it('should handle case 2', () => {
    expect(addUp(13)).toEqual(91)
  })
  it('should handle case 3', () => {
    expect(addUp(600)).toEqual(180300)
  })
})

/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

Source: https://www.codewars.com/kata/57f75cc397d62fc93d000059
*/

/**
 *
 * @param {String} code
 */

function calc (str) {
  const nums = str.split('').map(function (char) {
    return char.charCodeAt(0)
  })
  const total1 = nums
    .join('')
    .split('')
    .reduce(function (a, b) {
      return parseInt(a) + parseInt(b)
    }, 0)
  const total2 = nums
    .join('')
    .replace(/7/g, '1')
    .split('')
    .reduce(function (a, b) {
      return parseInt(a) + parseInt(b)
    }, 0)
  return total1 - total2
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(calc('ABC')).toEqual(6)
  })
})

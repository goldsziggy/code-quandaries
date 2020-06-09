/**
Reverse Coding Challenge #5
This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
Examples
832 ➞ 594
51 ➞ 36
7977 ➞ 198
1 ➞ 0
665 ➞ 99
149 ➞ 0
SourceE: https://edabit.com/challenge/Mq6LeA75xJjzvdthh
 */

/**
 *
 * @param {Number} num
 */
const revCode = (num) => {
  return num - num.toString().split('').sort()
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(revCode(832)).toEqual(594)
  })
  it('should work for case 2', () => {
    expect(revCode(51)).toEqual(36)
  })
  it('should work for case 3', () => {
    expect(revCode(7977)).toEqual(198)
  })
})

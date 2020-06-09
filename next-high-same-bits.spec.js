/**
Your task is to Find the next higher number (int) with same '1'- Bits.
I.e. as much '1' bits as before and output next higher than input. Input is always an int >0 up to 1<<30. No bad cases or special tricks...
Some easy examples:
Input: 129  => Output: 130 (10000001 => 10000010)
Input: 127 => Output: 191 (01111111 => 10111111)
Input: 1 => Output: 2 (01 => 10)
Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
First some static tests, later on many random tests too;-)!
source:  https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5
*/

import { parse } from '@babel/core'

/**
 *
 * @param {Number} num
 */
function nextHigher(num) {
  const numberOf1 = num.toString(2).match(/1/g).length
  let newNumber1s
  do {
    num++
    newNumber1s = num.toString(2).match(/1/g).length
  } while (newNumber1s !== numberOf1)
  return num
}

describe('A next number with same bits', () => {
  it('should work for case 1', () => {
    expect(nextHigher(129)).toEqual(130)
  })
  it('should work for case 2', () => {
    expect(nextHigher(127)).toEqual(191)
  })
  it('should work for case 3', () => {
    expect(nextHigher(1)).toEqual(2)
  })
  it('should work for case 4', () => {
    expect(nextHigher(323423)).toEqual(323439)
  })
  it('should work for case 5', () => {
    expect(nextHigher(1022)).toEqual(1279)
  })
  it('should work for case 6', () => {
    expect(nextHigher(742614188)).toEqual(742614193)
  })
  it('should work for case 7', () => {
    expect(nextHigher(528506888)).toEqual(528506896)
  })
  it('should work for case 8', () => {
    expect(nextHigher(982123548)).toEqual(982123555)
  })
})

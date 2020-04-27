/**
 Next bigger number with the same digits
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

Other Test Cases:
Test.assertEquals(nextBigger(12),21)
Test.assertEquals(nextBigger(513),531)
Test.assertEquals(nextBigger(2017),2071)
Test.assertEquals(nextBigger(414),441)
Test.assertEquals(nextBigger(144),414)

Source: https://www.codewars.com/kata/55983863da40caa2c900004e
 
 */

const getPermutaation = (data = [], permutation = [], permutations = []) => {
  if (data.length === 0) {
    permutations.push(permutation)
  } else {
    for (let i = 0; i < data.length; i++) {
      let curr = data.slice()
      let next = curr.splice(i, 1)
      getPermutaation(curr.slice(), permutation.concat(next), permutations)
    }
  }
  return permutations
}

/**
 *
 * @param {Number} number
 */
const nextBigger = (number) => {
  const pieces = number.toString().split('')
  const permutations = getPermutaation(pieces)
  const results = permutations
    .map((v) => parseInt(v.join('')))
    .sort((a, b) => a - b)
    .filter((v) => v > number)

  return results.length > 0 ? results[0] : -1
}

describe('Next bigger number with the same digits code-test', () => {
  it('should handle 12', () => {
    expect(nextBigger(12)).toBe(21)
  })
  it('should handle 513', () => {
    expect(nextBigger(513)).toBe(531)
  })
  it('should handle 2071', () => {
    expect(nextBigger(2017)).toBe(2071)
  })

  it('should hanlde 9', () => {
    expect(nextBigger(9)).toBe(-1)
  })
  it('should habdle 144', () => {
    expect(nextBigger(144)).toBe(414)
  })
})

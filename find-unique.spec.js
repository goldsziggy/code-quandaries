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

const findUniq = (numbers) => {
  const set = new Set(numbers)
  const duplicate = numbers
    .slice(0, 3)
    .filter((item, index, arr) => arr.indexOf(item) !== index)
  set.delete(duplicate[0])

  return Array.from(set)[0]
}

describe('Next bigger number with the same digits code-test', () => {
  it('should handle test 1', () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
  })
  it('should handle test 2', () => {
    expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55)
  })
})

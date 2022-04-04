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

const findUniq = (words) => {
  words.forEa

  return Array.from(set)[0]
}

describe('Next bigger number with the same digits code-test', () => {
  it('should handle test 1', () => {
    expect(
      findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
    ).toBe('BbBb')
  })
  it('should handle test 2', () => {
    expect(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])).toBe(
      'foo'
    )
  })
})

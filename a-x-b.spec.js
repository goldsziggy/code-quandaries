/**
This one is titled A*B, just like the last you neeed to figure out the code that solves it.
//Hmm.. 0 * 1 = 0
Test.assertEquals(testIt(0,1), 0)
//Yes, 1 * 2 = 2
Test.assertEquals(testIt(1,2), 2)
//I know, 5 * 6 = 30
Test.assertEquals(testIt(5,6), 30)
//What? 10 * 10 = 1 ?
Test.assertEquals(testIt(10,10), 1)
//Damn.. 200 * 200 = 4, 0 was omitted ?
Test.assertEquals(testIt(200,200), 4)
//Discover the mysteries of it ;-)
Test.assertEquals(testIt(12,34), 21)
//You can solve it
Test.assertEquals(testIt(123,45),54)
//And click ATTEMPT for more challenge..
source: https://www.codewars.com/kata/5a90c9ecb171012b47000077/train/javascript
 */

//https://stackoverflow.com/a/43204663
function sum(num) {
  return ('' + num).split('').reduce((acc, val) => acc + parseInt(val), 0)
}

const testIt = (a, b) => {
  return sum(a) * sum(b)
}

describe('All Balanced Parens code-test', () => {
  it('should handle 0', () => {
    expect(testIt(0, 1)).toEqual(0)
  })
  it('should handle 1', () => {
    expect(testIt(1, 2)).toEqual(2)
  })
  it('should handle 2', () => {
    expect(testIt(5, 6)).toEqual(30)
  })

  it('should hanlde 3', () => {
    expect(testIt(10, 10)).toEqual(1)
  })
  it('should hanlde 4', () => {
    expect(testIt(12, 34)).toEqual(21)
    // 34 = 17*2
    // 12 = 4*3
    // 12 = 2*2*3
    // 12 = 6 * 2

    // if 2nd number > 1st, add multiples of 2nd to first
  })
  it('should hanlde 5', () => {
    expect(testIt(123, 45)).toEqual(54)
    // 45 = 5 * 9
    // 45 = 5 * 3 * 3
    // 123 = 3 * 41
    // 123 = 3 *
  })
  it('should hanlde 6', () => {
    expect(testIt(200, 200)).toEqual(4)
  })
})

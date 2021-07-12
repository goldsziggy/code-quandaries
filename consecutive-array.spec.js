/**
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

More Tests:
Test.assertEquals(consecutive([4,8,6]),2);
Test.assertEquals(consecutive([1,2,3,4]),0);
Test.assertEquals(consecutive([]),0);
Test.assertEquals(consecutive([1]),0);

Source: https://www.codewars.com/kata/559cc2d2b802a5c94700000c/javascript
  */

/**
 * @param {Array} arr
 */
const consecutive = (arr) => {
  return arr.sort((a, b) => a - b).reduce((acc, curr, idx, sorted) => {
    const nextNum = idx < sorted.length - 1 ? sorted[idx + 1] : sorted[idx]
    const currNum = sorted[idx]
    const steps = nextNum - currNum > 1 ? nextNum - currNum - 1 : 0
    console.log({ currNum, nextNum, steps, acc, sorted })
    return acc + steps
  }, 0)
}

describe('Consecutive Array', () => {
  it('should work', () => {
    // expect(consecutive([4, 8, 6])).toBe(2)
    // expect(consecutive([1, 2, 3, 4])).toBe(0)
    // expect(consecutive([])).toBe(0)
    // expect(consecutive([1])).toBe(0)
    expect(consecutive([1, 5, 20])).toBe(17)
  })
})

/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 */

function getMultiples (mult: number, num: number): number[] {
  const multiples: number[] = []
  for (let i = mult; i < num; i += mult) {
    multiples.push(i)
  }
  return multiples
}
function solution (num: number): number {
  const threes = getMultiples(3, num)
  const fives = getMultiples(5, num)
  const uniques = [...new Set([...threes, ...fives])]
  const sum = uniques.reduce((acc, curr) => acc + curr, 0)
  return sum
}

describe('sum-3-or-5', () => {
  it('should return 23 when input is 10', () => {
    expect(solution(10)).toEqual(23)
    expect(solution(10)).toEqual(23)
  })
})

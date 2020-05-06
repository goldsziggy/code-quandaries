/**
 A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:
8 1 6
3 5 7
4 9 2
The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4. (Magic squares have appeared here on r/dailyprogrammer before, in #65 [Difficult] in 2012.)
Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.
Example inputs/outputs
[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
Optional bonus 1
Verify magic squares of any size, not just 3x3.
Optional bonus 2
Write another function that takes a grid whose bottom row is missing, so it only has the first 2 rows (6 values). This function should return true if it's possible to fill in the bottom row to make a magic square. You may assume that the numbers given are all within the range 1-9 and no number is repeated. Examples:
[8, 1, 6, 3, 5, 7] => true
[3, 5, 7, 8, 1, 6] => false
Hint: it's okay for this function to call your function from the main challenge.
This bonus can also be combined with optional bonus 1. (i.e. verify larger magic squares that are missing their bottom row.)
source: https://www.reddit.com/r/dailyprogrammer/comments/4dccix/20160404_challenge_261_easy_verifying_3x3_magic/
 */

const getRowCalc = (array) => {}

/**
 *
 * @param {Array} square
 */
const magicSquare = (square) => {
  const root = Math.sqrt(square.length)
  const { bool: rowBool } = square.reduce(
    (acc, val, idx) => {
      acc.val += val
      if (idx % root === root - 1 && idx >= root - 1) {
        if (acc.val !== 15) {
          acc.bool = false
        }
        acc.val = 0
      }
      return acc
    },
    { val: 0, bool: true }
  )

  const col = square.reduce((acc, val, idx) => {
    acc[idx % root] = val + (acc[idx % root] || 0)
    return acc
  }, [])
  const colBool = col.every((v) => v === 15)
  const { left, right } = square.reduce(
    (acc, val, idx) => {
      const pass = Math.floor(idx / root)

      if (idx % root === pass) {
        acc.left += val
      }
      if (idx % root === root - 1 - pass) {
        acc.right += val
      }
      return acc
    },
    { left: 0, right: 0 }
  )
  const diagBool = left === 15 && right === 15
  return rowBool && colBool && diagBool
}

describe('A browser-detect use-case', () => {
  it('should work for case 1', () => {
    expect(magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])).toBe(true)
  })
  it('should work for case 2', () => {
    expect(magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8])).toBe(true)
  })
  it('should work for case 3', () => {
    expect(magicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2])).toBe(false)
  })

  it('should work for case 4', () => {
    expect(magicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2])).toBe(false)
  })
})

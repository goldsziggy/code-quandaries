/**
 Can You Exit the Maze?
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.
Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.
Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false
// This maze only has dead ends!
canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false
// Exit only one block away, but unreachable!
canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.

source: https://edabit.com/challenge/ogDHjfpAcE896kN4H
 */

const updateMatrixWithVisited = (pos, matrix) => {
  const [y, x] = pos
  matrix[y][x] = 2
  return matrix
}

/**
 *
 * @param {Array} pos
 * @param {Array} matrix
 * @param {Boolean} isFound
 */
const getMove = (pos, matrix, isFound = false) => {
  const [y, x] = pos

  if (y === matrix.length - 1 && x === matrix[y].length - 1) {
    isFound = true
    return true
  }
  //can it move right?
  if (x < matrix[y].length - 1 && matrix[y][x + 1] === 0) {
    isFound = getMove([y, x + 1], updateMatrixWithVisited(pos, matrix), isFound)
  }
  //can it move left?
  if (x > 0 && matrix[y][x - 1] === 0) {
    isFound = getMove([y, x - 1], updateMatrixWithVisited(pos, matrix), isFound)
  }
  //can it move up?
  if (y > 0 && matrix[y - 1][x] === 0) {
    isFound = getMove([y - 1, x], updateMatrixWithVisited(pos, matrix), isFound)
  }
  //can it move Down?
  if (y < matrix.length - 1 && matrix[y + 1][x] === 0) {
    isFound = getMove([y + 1, x], updateMatrixWithVisited(pos, matrix), isFound)
  }
  return isFound
}

/**
 * @param {Array} matrix
 */
const canExit = (matrix) => {
  // first see if this is winnable, does the bottom right have an esacpe?
  const last = matrix[matrix.length - 1]
  if (last[last.length - 1] === 1) {
    return false
  }
  return getMove([0, 0], matrix)
}

describe('A Captial Challenge code-test', () => {
  it('should be true', () => {
    expect(
      canExit([
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0],
      ])
    ).toBe(true)
  })
  it('should be false', () => {
    expect(
      canExit([
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1, 1, 1],
      ])
    ).toBe(false)
  })
  it('should handle only dead ends', () => {
    expect(
      canExit([
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
      ])
    ).toBe(false)
  })

  it('should work', () => {
    expect(
      canExit([
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0],
      ])
    ).toBe(true)
  })
})

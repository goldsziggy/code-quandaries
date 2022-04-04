/**
 * Write a function that will take a grid of cells, each filled in with a color and will return which color has the most adjacent neighbors of the same color. It's up to you to design the input to the function
 *
 * Source: https://northwesternmutual.slack.com/archives/CNUPPUX7A/p1647431680506639
 *
 */
const getRowCalc = (array) => {}

const findAdjacent = (grid, row, col, count = 1) => {
  console.log({ row, col, count, char: grid[row][col] })
  if (grid[row][col] === '.') {
    return count - 1
  }
  if (grid[row][col] === grid[row][col + 1]) {
    grid[row][col] = '.'

    count = findAdjacent(grid, row, col + 1, count + 1)
  }
  if (col > 0 && grid[row][col] === grid[row][col - 1]) {
    grid[row][col] = '.'

    count = findAdjacent(grid, row, col - 1, count + 1)
  }
  if (row < grid.length - 1 && grid[row][col] === grid[row + 1][col]) {
    console.log({ row, col, count, char: grid[row][col] })
    grid[row][col] = '.'

    count = findAdjacent(grid, row + 1, col, count + 1)
  }
  if (row > 0 && grid[row][col] === grid[row - 1][col]) {
    grid[row][col] = '.'

    count = findAdjacent(grid, row - 1, col, count + 1)
  }
  return count
}

const mostPopularColor = (grid) => {
  let currentColor = grid[0][0]
  let currentColorCount = 0
  let maxColor = currentColor
  let maxColorCount = currentColorCount

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== currentColor) {
        if (currentColorCount > maxColorCount) {
          maxColor = currentColor
          maxColorCount = currentColorCount
        }
        currentColor = grid[row][col]
        currentColorCount = 0
      }
      currentColorCount = findAdjacent([...grid], row, col)
    }
  }

  return maxColor
}

describe('A browser-detect use-case', () => {
  // it('should work for case 1', () => {
  //   expect(
  //     mostPopularColor([
  //       ['P', 'P', 'P', 'R', 'R'],
  //       ['P', 'G', 'P', 'R', 'R'],
  //       ['Y', 'B', 'Y', 'R', 'R'],
  //       ['B', 'B', 'B', 'B', 'O']
  //     ])
  //   ).toBe('R')
  // })
  // it('should work for case 2', () => {
  //   expect(
  //     mostPopularColor([
  //       ['B', 'B', 'B', 'G'],
  //       ['P', 'P', 'P', 'G'],
  //       ['P', 'G', 'P', 'G'],
  //       ['P', 'P', 'P', 'G'],
  //       ['B', 'G', 'G', 'G']
  //     ])
  //   ).toBe('P')
  // })
  it('should work for case 3', () => {
    expect(
      mostPopularColor([
        ['B', 'B', 'B', 'G'],
        ['P', 'P', 'B', 'G'],
        ['B', 'G', 'B', 'G'],
        ['B', 'B', 'B', 'G'],
        ['G', 'G', 'G', 'G']
      ])
    ).toBe('B')
  })
})

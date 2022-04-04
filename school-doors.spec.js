/**
 * Write a function that will take a grid of cells, each filled in with a color and will return which color has the most adjacent neighbors of the same color. It's up to you to design the input to the function
 *
 * Source: https://northwesternmutual.slack.com/archives/CNUPPUX7A/p1647431680506639
 *
 */
const doors = (students) => {
  const state = new Array(students).fill(0)
  for (let i = 0; i < students; i++) {
    for (let j = i; j < students; j += i + 1) {
      state[j] = (state[j] + 1) % 2
    }
  }
  return state.filter((x) => x === 1).length
}

describe('A browser-detect use-case', () => {
  it('should work for case 3', () => {
    expect(doors(5)).toBe(2)
  })
})

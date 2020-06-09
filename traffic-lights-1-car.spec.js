/**
Overview
A character string represents a city road.
Cars travel on the road obeying the traffic lights..
Legend:
. = Road
C = Car
G = GREEN traffic light
O = ORANGE traffic light
R = RED traffic light
Something like this:
C...R............G......
Rules
Simulation
At each iteration:
the lights change, according to the traffic light rules... then
the car moves, obeying the car rules
Traffic Light Rules
Traffic lights change colour as follows:
GREEN for 5 time units... then
ORANGE for 1 time unit... then
RED for 5 time units....
... and repeat the cycle
Car Rules
Cars travel left to right on the road, moving 1 character position per time unit
Cars can move freely until they come to a traffic light. Then:
if the light is GREEN they can move forward (temporarily occupying the same cell as the light)
if the light is ORANGE then they must stop (if they have already entered the intersection they can continue through)
if the light is RED the car must stop until the light turns GREEN again
Kata Task
Given the initial state of the road, return the states for all iterations of the simiulation.
Input
road = the road array
n = how many time units to simulate (n >= 0)
Output
An array containing the road states at every iteration (including the initial state)
Note: If a car occupies the same position as a traffic light then show only the car
Notes
There is only one car
For the initial road state
the car is always at the first character position
traffic lights are either GREEN or RED, and are at the beginning of their countdown cycles
There are no reaction delays - when the lights change the car drivers will react immediately!
If the car goes off the end of the road it just disappears from view
There will always be some road between adjacent traffic lights
Example
Run simulation for 10 time units
Input
road = "C...R............G......"
n = 10
Result
[
  "C...R............G......", // 0 initial state as passed
  ".C..R............G......", // 1
  "..C.R............G......", // 2
  "...CR............G......", // 3
  "...CR............G......", // 4
  "....C............O......", // 5 show the car, not the light
  "....GC...........R......", // 6
  "....G.C..........R......", // 7
  "....G..C.........R......", // 8
  "....G...C........R......", // 9
  "....O....C.......R......"  // 10
]
Source: https://www.codewars.com/kata/5d0ae91acac0a50232e8a547
 */

/**
 *
 * @param {String} road
 * @param {Boolean} toggleLight
 */
function moveCar(road, prevRoad, prevAll) {
  const pieces = road.split('')
  let carIndex = pieces.findIndex((char) => char === 'C')
  carIndex = carIndex < 0 ? -10 : carIndex
  // if im at the end, remove the car!
  if (carIndex === pieces.length - 1) {
    pieces[carIndex] = prevRoad[carIndex]
  }

  // if the next pieces is a `.` then move the car there.
  if (pieces[carIndex + 1] === '.') {
    pieces[carIndex + 1] = 'C'
    pieces[carIndex] = ['R', 'G', 'O'].includes(prevRoad[carIndex]) ? prevRoad[carIndex] : '.'
    if (pieces[carIndex] === 'R') {
      pieces[carIndex] = 'G'
    }
  }
  // flip lights
  const piecesAdjusted = pieces.map((char, index) => {
    if (char === 'O') {
      return 'R'
    } else if (
      char === 'G' &&
      prevAll.length >= 5 &&
      ['G', 'C'].includes(prevAll[prevAll.length - 5][index])
    ) {
      return 'O'
    } else if (char === 'R' && prevAll.length >= 5 && prevAll[prevAll.length - 5][index] === 'R') {
      return 'G'
    }
    return char
  })
  if (piecesAdjusted[carIndex + 1] === 'G') {
    piecesAdjusted[carIndex] = '.'
    piecesAdjusted[carIndex + 1] = 'C'
  }

  return piecesAdjusted.join('')
}

/**
 *
 * @param {String} road
 * @param {Number} count
 */
function trafficLights(road, count) {
  let iterations = [road]

  for (let i = 1; i < count + 1; i++) {
    iterations.push(moveCar(iterations[i - 1], iterations[Math.max(0, i - 2)], iterations))
  }

  console.log({ iterations })

  return iterations
}

describe('A traafficLights', () => {
  it('should work for case 1', () => {
    expect(trafficLights('C...R............G......', 10)).toEqual([
      'C...R............G......', // 0 initial state as passed
      '.C..R............G......', // 1
      '..C.R............G......', // 2
      '...CR............G......', // 3
      '...CR............G......', // 4
      '....C............O......', // 5 show the car, not the light
      '....GC...........R......', // 6
      '....G.C..........R......', // 7
      '....G..C.........R......', // 8
      '....G...C........R......', // 9
      '....O....C.......R......', // 10
    ])
  })
  it('should work for case 2', () => {
    expect(trafficLights('CG...', 5)).toEqual([
      'CG...',
      '.C...',
      '.GC..',
      '.G.C.',
      '.G..C',
      '.O...',
    ])
  })
  it('should work for case 3', () => {
    expect(trafficLights('C.......G.', 20)).toEqual([
      'C.......G.',
      '.C......G.',
      '..C.....G.',
      '...C....G.',
      '....C...G.',
      '.....C..O.',
      '......C.R.',
      '.......CR.',
      '.......CR.',
      '.......CR.',
      '.......CR.',
      '........C.',
      '........GC',
      '........G.',
      '........G.',
      '........G.',
      '........O.',
      '........R.',
      '........R.',
      '........R.',
      '........R.',
      '........R.',
      '........G.',
      '........G.',
      '........G.',
      '........G.',
      '........G.',
    ])
  })
})

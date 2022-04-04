/*
Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Source: https://www.codewars.com/kata/5813d19765d81c592200001a */

/**
 *
 * @param {String} code
 */

function dontGiveFive (start, end) {
  return end - start - Math.floor((end - start) / 5) + 1
}

// function dontGiveFive (start, end) {
//   console.log({
//     start,
//     end,
//     floor: Math.floor(end / 5),
//     f2: Math.floor(start / 5)
//   })
//   return end - start - (Math.floor(end / 5) - Math.floor(start / 5)) + 1
// }

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(dontGiveFive(1, 9)).toEqual(8)
    expect(dontGiveFive(4, 17)).toEqual(12)
  })
})

/**
 Given an array of any amount of numbers add them up to a total of a single digit number?
example: [4,7,2,6,7,7,9,2]   4 + 7 + 2 + 6 + 7 + 7 + 9 + 2 = 44 .   4 + 4 = 8
 */

/**
 *
 * @param {Array} arr
 */
function singleNumberCruncher(arr) {
  if (arr.length > 1) {
    const recur = +arr[0] + singleNumberCruncher(arr.slice(1))
    return recur > 9 ? singleNumberCruncher(recur.toString().split('')) : recur
  }
  return arr[0] > 9 ? singleNumberCruncher(arr[0].toString().split('')) : +arr[0]
}

const test = singleNumberCruncher([4, 7, 9, 6, 7, 7, 2, 2])
// const test = singleNumberCruncher([1, 2])

console.log(test)

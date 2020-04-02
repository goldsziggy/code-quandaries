/**
 Flatten an array without using a built in function (like Array.prototype.flat()).
[2, 13, [10, [2, 3], 5, 1], 7, [7], 8] becomes [2, 13, 10, 2, 3, 5, 1, 7, 7, 8] (edited) 
 */
/**
 *
 * @param {Array} arr
 */
const flatten = arr =>
  JSON.stringify(arr)
    .replace(/\[|\]/g, '')
    .split(',')
    .map(Number)

console.log(flatten([2, 13, [10, [2, 3], 5, 1], 7, [7], 8]))

/**
 * You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she'll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3, 3, 1, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles.
Create a function: birthdayCakeCandles. It must return an integer representing the number of candles she can blow out.
birthdayCakeCandles has the following parameter: arr - an array of integers representing candle heights.
Taken from:
https://www.florin-pop.com/blog/2019/03/jcc-birthday-cake-candles/
 */

/**
 *
 * @param {Array} arr
 */
const birthdayCakeCandles = arr => {
  return arr.sort((a, b) => b - a).filter((v, i, a) => v === a[0]).length
}

const test = birthdayCakeCandles([])

console.log(test)

/**
In this challenge, you have to establish if an integer is an Unprimeable number. To be Unprimeable, when a single digit of a composite number is exchanged with any digit from 0 up to 9, the new number obtained must not be a prime:
number = 14
Numbers obtained changing the first digit (1):
04 (4), 14, 24, 34, 44, 54, 64, 74, 84, 94
// Leading zeros are not considered
Numbers obtained changing the second digit (4):
10, 11, 12, 13, 14, 15, 16, 17, 18, 19
// Among the two series, 11, 13, 17 and 19 are primes
// 14 is not an unprimeable number
number = 200
Numbers obtained changing the first digit (2):
000 (0), 100, 200, 300, 400, 500, 600, 700, 800, 900
// Leading zeros are not considered
Numbers obtained changing the second digit (0):
200, 210, 220, 230, 240, 250, 260, 270, 280, 290
Numbers obtained changing the third digit (0):
200, 201, 202, 203, 204, 205, 206, 207, 208, 209
// Among the three series, there aren't primes
// 200 is an unprimeable number (the first of the series)
Given a non-negative integer num, implement a function that returns:
The string "Prime Input" if num is prime.
The string "Unprimeable" if num is Unprimeable (accordingly to the above instructions).
If num is not Unprimeable, an array containing all the primes obtained after exchanging its digits, without duplicates and sorted ascendingly.
Examples
isUnprimeable(200) ➞ "Unprimeable"
isUnprimeable(14) ➞ [11, 13, 17, 19]
isUnprimeable(2) ➞ "Prime Input"
Notes
When changing the first digit, leading zeros are not considered part of the new number obtained.
Despite is still an unproofed theory, as far as we know every even number (except 2) is not prime. You are free to choose to use this discriminant when you check the number obtained after the change of a digit.
The same concept can be applied also to primes. Primes that do not return other primes when their single digits are changed (apart from the number itself) are called Weakly Primes: the first prime of this series is 294001.
source: https://edabit.com/challenge/nPDQ5rYH8WccdQx33
 */

const isPrime = (num) => {
  var n = Math.sqrt(num)
  for (var i = 2; i <= n; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
/**
 *
 * @param {Number} num
 */
const isUnprimeable = (num) => {
  const replacements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const nums = num.toString().split('')
  let permutations = []

  if (isPrime(num)) {
    return 'Prime Input'
  }

  for (let i = 0; i < nums.length; i++) {
    permutations.push(
      ...replacements.map((v) => {
        if (i === 0) {
          return [v, ...nums.slice(i + 1)]
        } else if (i === nums.length - 1) {
          return [...nums.slice(0, i), v]
        }
        return [...nums.slice(0, i - 1), v, ...nums.slice(i)]
      })
    )
  }
  const numbers = permutations.map((v) => parseInt(v.join(''))).filter((v) => isPrime(v) && v !== 0)

  if (numbers.length > 0) {
    return numbers
  }
  return 'Unprimeable'
}

describe('A browser-detect use-case', () => {
  it('should work for case 1', () => {
    expect(isUnprimeable(14)).toEqual([11, 13, 17, 19])
  })
  it('should work for case 2', () => {
    expect(isUnprimeable(200)).toBe('Unprimeable')
  })
  it('should work for case 3', () => {
    expect(isUnprimeable(2)).toBe('Prime Input')
  })
})

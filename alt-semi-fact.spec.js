/**
Alt Facts, Semi Facts
The factorial of a positive number n is the product of all numbers from 1 to n.
5! = 5 x 4 x 3 x 2 x 1 = 120
The semifactorial (also known as the double factorial) of a positive number n is the product of all numbers from 1 to n that have the same parity (i.e. odd or even) as n.
12!! = 12 x 10 x 8 x 6 x 4 x 2 = 46,080
7!! = 7 x 5 x 3 x 1 = 105
The alternating factorial of a positive number n is the sum of the consecutive factorials from n to 1, where every other factorial is multiplied by -1.
Alternating factorial of 1:
af(1) = 1!
Alternating factorial of 2:
af(2) = 2! + (-1)x(1!) = 2! - 1! = 2 -1 = 1
Alternating factorial of 3:
af(3) = 3! - 2! + 1! = 6 - 2 + 1 = 5
Create a function that takes a number n and returns the difference between the alternating factorial and semifactorial of n.
Examples
altSemi(1) ➞ 0
altSemi(2) ➞ -1
altSemi(3)➞ 2
source: https://edabit.com/challenge/MBsY28LQth2d2G6ci
 */

function altSemi(n) {
  return alt(n) - semi(n)
}

function fact(n) {
  if (n === 0 || n === 1) return 1
  return n * fact(n - 1)
}

function semi(n) {
  if (n === 0 || n === 1) return 1
  return n * semi(n - 2)
}

function alt(n) {
  let sum = 0
  for (let i = n; i > 0; i--) {
    const p = i % 2 === n % 2 ? 1 : -1
    sum += fact(i) * p
  }
  return sum
}

describe('A numerical of string', () => {
  it('should work for case 1', () => {
    expect(altSemi(1)).toEqual(0)
  })
  it('should work for case 2', () => {
    expect(altSemi(2)).toEqual(-1)
  })
  it('should work for case 3', () => {
    expect(altSemi(3)).toEqual(2)
  })
  // it('should work for case 4', () => {
  //   expect(altSemi('aaaaaaaaaaaa')).toEqual('123456789101112')
  // })
})

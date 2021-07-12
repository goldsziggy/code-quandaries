/**
Note: Libraries are disabled for this kata.
Doing arithmetic with big numbers is impossible to do with regular integer types. In JavaScript (which represents numbers as 64-bit floats), anything beyond 2^53-1 becomes increasingly less accurate. For example, 12345678901234567890 becomes 12345678901234567000— off by 890.
For this reason, the only way of accurately representing such large integers is as strings.
You must write two functions, bigAdd and bigSub, which will both take two arguments. These two arguments will either be a valid representation of an integer as a string (negative or positive, no leading zeros), or a regular number. They will return the correct answer as a string, bigAdd summing the two values, and bigSub subtracting the second value from the first.
For example:
bigAdd(1, "123456789012345678901234567890") === "123456789012345678901234567891";
bigSub("123456789012345678901234567890", 1) === "123456789012345678901234567889";
Remember, the values could be negative, and so the calculations should be made accordingly.
bigAdd(-1, "123456789012345678901234567890") === "123456789012345678901234567889";
bigSub("123456789012345678901234567890", -1) === "123456789012345678901234567891";
Source: https://www.codewars.com/kata/54d130bb11b05bd224000212
  */

const bigSub = (num1, num2) => {
  let n1 = '' + num1
  let n2 = '' + num2
  const maxLen = n1.length > n2.length ? n1.length : n2.length
  n1 = n1.padStart(maxLen, '0')
  n2 = n2.padStart(maxLen, '0')
  let isBorrowed = false
  let result = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    const newN1 = isBorrowed ? parseInt(n1[i]) - 1 : parseInt(n1[i])
    const newN2 = parseInt(n2[i])
    const localRes = newN1 >= newN2 ? newN1 - newN2 : (newN1 + 10) - newN2

    isBorrowed = newN1 < newN2

    console.log({ isBorrowed, localRes, newN1, newN2 })

    result = '' + localRes + result
  }

  return result
}

const bigAdd = (num1, num2) => {
  let n1 = '' + num1
  let n2 = '' + num2
  const maxLen = n1.length > n2.length ? n1.length : n2.length
  n1 = n1.padStart(maxLen, '0')
  n2 = n2.padStart(maxLen, '0')
  let carryOver = 0
  let result = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    const localRes = parseInt(n1[i]) + parseInt(n2[i]) + carryOver
    carryOver = Math.floor(localRes / 10)
    result = '' + (localRes % 10) + result
  }

  return result
}

describe('Next bigger number with the same digits code-test', () => {
  it('should handle bigAdd', () => {
    expect(bigAdd('12', '6')).toBe('18')
    expect(bigAdd('12', '9')).toBe('21')
    expect(bigAdd(1, '123456789012345678901234567890')).toBe('123456789012345678901234567891')
  })
  it('should handle bigSub', () => {
    expect(bigSub('9', '8')).toBe('1')
    expect(bigSub('12', '3')).toBe('09')
    expect(bigSub('123456789012345678901234567890', '1')).toBe('123456789012345678901234567889')
  })
})

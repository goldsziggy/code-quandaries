/**
Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000)
  // returns "8/13/1999 10/13/2000"

fridayTheThirteenths(2014, 2015)
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"

fridayTheThirteenths(2000)
  // returns "10/13/2000"
This kata was designed to use the built-in Date object. Dates can often be finicky, so while there are other methods to get the correct dates, I can't gurantee they will work.

Source: https://www.codewars.com/kata/540954232a3259755d000039
*/

const monthHasFriday13 = (month, year) => {
  if (month > 12) return ''
  if (new Date(`${month}/13/${year}`).getDay() === 5) {
    return `${month}/13/${year} ` + monthHasFriday13(month + 1, year)
  }
  return monthHasFriday13(month + 1, year)
}
const yearHasFriday13 = (startYear, endYear) => {
  if (!endYear) return monthHasFriday13(1, startYear)
  if (startYear > endYear) return ''
  return (
    monthHasFriday13(1, startYear) + yearHasFriday13(startYear + 1, endYear)
  )
}

const fridayTheThirteenths = (start, end) => {
  return yearHasFriday13(start, end).trim()
  // return years.map((year) => monthHasFriday13(1, year).trim()).join(' ')
}

describe('A browser-detect use-case', () => {
  it('should work for case 1', () => {
    expect(fridayTheThirteenths(1999, 2000)).toBe('8/13/1999 10/13/2000')
  })
  it('should work for case 2', () => {
    expect(fridayTheThirteenths(2014, 2015)).toBe(
      '6/13/2014 2/13/2015 3/13/2015 11/13/2015'
    )
  })
  it('should work for case 3', () => {
    expect(fridayTheThirteenths(2000)).toBe('10/13/2000')
  })
})

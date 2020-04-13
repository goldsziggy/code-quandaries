/**
 The Fiscal Code
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Examples
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"
Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.

source: https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg
 */
const months = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T',
}

const getSurNameChars = (surname) => {
  if (surname.length < 3) {
    return surname.toUpperCase() + 'X'.repeat(3 - surname.length)
  } else {
    let vowels = ''
    const chars = surname.split('').reduce((acc, val) => {
      if (/[^aeiou]/.test(val.toLowerCase())) {
        return acc + val.toUpperCase()
      }
      vowels += val.toUpperCase()
      return acc
    }, '')

    if (chars.length >= 3) {
      return chars.substring(0, 3)
    }
    return chars + vowels.substring(0, 3 - chars.length)
  }
}
const getNameChars = (name) => {
  const consonants = name.replace(/[aeiou]/g, '')
  if (consonants.length === 3) {
    return consonants.toUpperCase()
  } else if (consonants.length > 3) {
    return consonants.substring(0, 1).toUpperCase() + consonants.substring(2, 4).toUpperCase()
  }
  return getSurNameChars(name)
}
const getDobAndGender = (dob, gender) => {
  const parts = dob.split('/')
  const mm = parts[1]
  const yy = parts[2].slice(-2)
  const dd = gender === 'M' ? parts[0] : parseInt(parts[0]) + 40
  const last = dd.length < 2 ? `0${dd}` : dd

  return yy + months[mm] + last
}

/**
 * @param {Object} prop
 * @param {String} prop.name
 * @param {String} prop.surname
 * @param {String} prop.gender
 * @param {String} prop.dob
 */
const fiscalCode = ({ name, surname, gender, dob }) => {
  const section1 = getSurNameChars(surname)
  const section2 = getNameChars(name)
  const section3 = getDobAndGender(dob, gender)
  return section1 + section2 + section3
}

describe('A Captial Challenge code-test', () => {
  it('should handle Matt Edabit', () => {
    expect(
      fiscalCode({
        name: 'Matt',
        surname: 'Edabit',
        gender: 'M',
        dob: '1/1/1900',
      })
    ).toBe('DBTMTT00A01')
  })
  it('should handle Helen Yu', () => {
    expect(
      fiscalCode({
        name: 'Helen',
        surname: 'Yu',
        gender: 'F',
        dob: '1/12/1950',
      })
    ).toBe('YUXHLN50T41')
  })
  it('should handle Mickey Mouse', () => {
    expect(
      fiscalCode({
        name: 'Mickey',
        surname: 'Mouse',
        gender: 'M',
        dob: '16/1/1928',
      })
    ).toBe('MSOMKY28A16')
  })
})

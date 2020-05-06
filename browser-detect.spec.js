/**
 A Capital Challenge
Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.
To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".
Examples
selectLetters("heLLO", "GUlp") ➞ "help"
selectLetters("1234567", "XxXxX")  ➞ "135"
selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"
Notes
The strings don't have to be the same length.
Strings can contain non-alphabetic characters.
Source; https://edabit.com/challenge/gjKemfXwedir9y7D4
 */

const browserDetect = (navigator) => {
  let OSName = 'Unknown OS'

  // check for ios
  if (navigator.platform.indexOf('iPhone') !== -1) OSName = 'IOS'

  // check for android
  if (
    navigator.platform.indexOf('Android') !== -1 ||
    navigator.userAgent.toLowerCase().indexOf('android') !== -1
  )
    OSName = 'Android'
  // some newer Samsung models use Linux
  if (navigator.platform.toLowerCase().indexOf('linux arm') !== -1) OSName = 'Linux'
  return OSName
}

describe('A browser-detect use-case', () => {
  it('should work for IOS platform', () => {
    expect(browserDetect({ platform: 'super Cool iPhone platform', userAgent: 'blah' })).toBe('IOS')
  })
  it('should work for Android platform', () => {
    expect(browserDetect({ platform: 'super Cool Android platform', userAgent: 'blah' })).toBe(
      'Android'
    )
  })
  it('should work for Linux Arm platform', () => {
    expect(browserDetect({ platform: 'Linux Arm64 PI', userAgent: 'blah' })).toBe('Linux')
  })

  it('should work for bogus platforms and a android user-agent', () => {
    expect(
      browserDetect({ platform: 'Blah Cool Im Garbage', userAgent: 'AnDroid phones here' })
    ).toBe('Android')
  })
})

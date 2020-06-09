/**
White Spaces Between Lower and Uppercase Letters
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
Notes
Each word in the phrase will be at least two characters long.

Sourrcee: https://edabit.com/challenge/ew9dry9RzoaeiTzwX
 */

/**
 *
 * @param {String} word
 */
const insertWhitespace = (word) => {
  return word.match(/[A-Z][a-z]+/g).join(' ')
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(insertWhitespace('SheWalksToTheBeach')).toEqual('She Walks To The Beach')
  })
  it('should work for case 2', () => {
    expect(insertWhitespace('MarvinTalksTooMuch')).toEqual('Marvin Talks Too Much')
  })
  it('should work for case 3', () => {
    expect(insertWhitespace('TheGreatestUpsetInHistory')).toEqual('The Greatest Upset In History')
  })
})

/**
Description
An anagram is a form of word play, where you take a word (or set of words) and form a different word (or different set of words) that use the same letters, just rearranged. All words must be valid spelling, and shuffling words around doesn't count.
Some serious word play aficionados find that some anagrams can contain meaning, like "Clint Eastwood" and "Old West Action", or "silent" and "listen".
Someone once said, "All the life's wisdom can be found in anagrams. Anagrams never lie." How they don't lie is beyond me, but there you go.
Punctuation, spaces, and capitalization don't matter, just treat the letters as you would scrabble tiles.
Input Description
You'll be given two words or sets of words separated by a question mark. Your task is to replace the question mark with information about the validity of the anagram. Example:
"Clint Eastwood" ? "Old West Action"
"parliament" ? "partial man"
Output Description
You should replace the question mark with some marker about the validity of the anagram proposed. Example:
"Clint Eastwood" is an anagram of "Old West Action"
"parliament" is NOT an anagram of "partial man"
Challenge Input
"wisdom" ? "mid sow"
"Seth Rogan" ? "Gathers No"
"Reddit" ? "Eat Dirt"
"Schoolmaster" ? "The classroom"
"Astronomers" ? "Moon starer"
"Vacation Times" ? "I'm Not as Active"
"Dormitory" ? "Dirty Rooms"
Challenge Output
"wisdom" is an anagram of "mid sow"
"Seth Rogan" is an anagram of "Gathers No"
"Reddit" is NOT an anagram of "Eat Dirt"
"Schoolmaster" is an anagram of "The classroom"
"Astronomers" is NOT an anagram of "Moon starer"
"Vacation Times" is an anagram of "I'm Not as Active"
"Dormitory" is NOT an anagram of "Dirty Rooms"
source: https://www.reddit.com/r/dailyprogrammer/comments/52enht/20160912_challenge_283_easy_anagram_detector/
 */

/**
 *
 * @param {String} str
 */
const anagramFinder = str => {
  const parts = str.split('?')
  const lhs = parts[0]
    .replace(/\s/g, '')
    .split('')
    .sort()
  const rhs = parts[1]
    .replace(/\s/g, '')
    .split('')
    .sort()
  const isAnagram = JSON.stringify(lhs) === JSON.stringify(rhs)
  return `${parts[0].trim()} is${isAnagram ? '' : ' NOT'} an anagram of ${parts[1].trim()}`
}

// const test = anagramFinder('wisdom ? mid sow')
const test = anagramFinder('reddit ? eat dirt')

console.log(test)

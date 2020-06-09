/**
Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
All words that begin with an upper case letter should come after that, and should be sorted in descending order.
If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

Example
For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.

Test cases:
Test.assertEquals(sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights"), "as habitan he him himself his in in is of of own rights the treating I Alleghanies")
Test.assertEquals(sort("take up the task eternal, and the burden and the lesson"), "and and burden eternal lesson take task the the the up")
Test.assertEquals(sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"), "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut","sentence may end with a punctuation")
Test.assertEquals(sort("Pioneers, O Pioneers!"), "Pioneers Pioneers O","sentence may end with a punctuation")
source: https://www.codewars.com/kata/52dffa05467ee54b93000712
 */

//https://initjs.org/merge-sort-in-javascript-4614386c1374

/**
 *
 * @param {String} str
 */
function sort(str) {
  const words = str
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .reduce(
      (acc, word) => {
        if (word.charCodeAt(0) <= 90) acc.upper.push(word)
        else acc.lower.push(word)
        return acc
      },
      { lower: [], upper: [] }
    )
  return `${words.lower.sort().join(' ')} ${words.upper.sort((a, b) => a < b).join(' ')}`.trim()
}

describe('A recursive sum', () => {
  it('should work for case 1', () => {
    expect(
      sort('I, habitan of the Alleghanies, treating of him as he is in himself in his own rights')
    ).toEqual('as habitan he him himself his in in is of of own rights the treating I Alleghanies')
  })
  it('should work for case 2', () => {
    expect(sort('take up the task eternal, and the burden and the lesson')).toEqual(
      'and and burden eternal lesson take task the the the up'
    )
  })
  it('should work for case 3', () => {
    expect(
      sort('Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!')
    ).toEqual('and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut')
  })
  it('should work for case 4', () => {
    expect(sort('Pioneers, O Pioneers!')).toEqual('Pioneers Pioneers O')
  })
})

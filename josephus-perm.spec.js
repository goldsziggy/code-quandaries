/**
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.
Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).
Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.
You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.
Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.
For example, with n=7 and k=3 josephus(7,3) should act this way.
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:
josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
For more info, browse the Josephus Permutation page on wikipedia; related kata: Josephus Survivor.
Examples:
Test.assert_equals(josephus([1,2,3,4,5,6,7,8,9,10],1),[1,2,3,4,5,6,7,8,9,10])
Test.assert_equals(josephus([1,2,3,4,5,6,7,8,9,10],2),[2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
Test.assert_equals(josephus(["C","o","d","e","W","a","r","s"],4),['e', 's', 'W', 'o', 'C', 'd', 'r', 'a'])
Test.assert_equals(josephus([1,2,3,4,5,6,7],3),[3, 6, 2, 7, 5, 1, 4])
Test.assert_equals(josephus([],3),[])
Source: https://www.codewars.com/kata/josephus-permutation/ Source: https://www.codewars.com/kata/554ca54ffa7d91b236000023 
 */

/**
 *
 * @param {Array} arr
 * @param {Number} freq
 */
function josephus(arr, freq) {
  let ans = []
  let index = 1
  while (arr.length > ans.length) {
    let char
    let counter = 0
    do {
      const constrainedIndex = (index - 1) % arr.length
      const outerBound = index % arr.length === 0 && index > 0 ? arr.length : index % arr.length
      counter += arr.slice(constrainedIndex, outerBound).pop() === '__PLACEHOLDER__' ? 0 : 1
      if (counter === freq) {
        char = arr.splice(constrainedIndex, 1, '__PLACEHOLDER__').pop()
      }
      index += 1
    } while (counter < freq)

    ans.push(char)
  }
  return ans
}

describe('A josephus permutation', () => {
  it('should work for case 1', () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('should work for case 2', () => {
    expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).toEqual([2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
  })
  it('should work for case 3', () => {
    expect(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4)).toEqual([
      'e',
      's',
      'W',
      'o',
      'C',
      'd',
      'r',
      'a',
    ])
  })
})

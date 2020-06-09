/**
Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

Source; https://www.codewars.com/kata/5946a0a64a2c5b596500019a
 */
const crypto = require('crypto')

const getPermutation = (data = [], permutation = [], permutations = []) => {
  if (data.length === 0) {
    permutations.push(permutation)
  } else {
    for (let i = 0; i < data.length; i++) {
      let curr = data.slice()
      let next = curr.splice(i, 1)
      getPermutation(curr.slice(), permutation.concat(next), permutations)
    }
  }
  return permutations
}
/**
 *
 * @param {String} code
 */
function crack(sha, scramble) {
  const permutations = getPermutation(scramble.split(''))
  let cracked = null
  for (let perm of permutations) {
    const hash = crypto.createHash('sha256')
    hash.update(perm.join(''))
    const digest = hash.digest('hex')
    if (digest === sha) {
      cracked = perm.join('')
      break
    }
  }

  return cracked
}

describe('A reverse-binary challenge', () => {
  it('should work for case 1', () => {
    expect(
      crack('5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'cdeo')
    ).toEqual('code')
  })
  it('should work for case 2', () => {
    expect(
      crack('b8c49d81cb795985c007d78379e98613a4dfc824381be472238dbd2f974e37ae', 'deGioOstu')
    ).toEqual('GoOutside')
  })
  it('should work for case 3', () => {
    expect(
      crack('f58262c8005bb64b8f99ec6083faf050c502d099d9929ae37ffed2fe1bb954fb', 'abc')
    ).toEqual(null)
  })
})

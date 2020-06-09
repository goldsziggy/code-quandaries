/**
This kata aims to show the vulnerabilities of hashing functions for short messages.
When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters that make the expected value, but in alphabetical order.
The returned value is less than 10 characters long. Return nil for Ruby and Crystal, None for Python, null for Java when the hash cannot be cracked with the given characters.
Example:
Example arguments: '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'cdeo'
Correct output: 'code'
assertEquals("GoOutside", Cracker.crackSha256("b8c49d81cb795985c007d78379e98613a4dfc824381be472238dbd2f974e37ae", "deGioOstu"));
    assertEquals(null, Cracker.crackSha256("f58262c8005bb64b8f99ec6083faf050c502d099d9929ae37ffed2fe1bb954fb", "abc"));
source: https://www.codewars.com/kata/587f0abdd8730aafd4000035/train/java
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

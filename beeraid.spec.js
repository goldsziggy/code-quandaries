/**
 Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
1) your referral bonus, and
2) the price of a beer can
For example:
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
Source: https://www.codew
 */

/**
 *
 * @param {Number} referalBonus
 * @param {Number} beerPrice
 */
function beeramid(referalBonus, beerPrice) {
  let level = 1
  if (beerPrice > referalBonus) return 0
  while (referalBonus > 0) {
    referalBonus -= Math.pow(level, 2) * beerPrice
    level++
  }

  return referalBonus < 0 ? level - 2 : level - 1
}

describe('A josephus permutation', () => {
  it('should work for case 1', () => {
    expect(beeramid(1500, 2)).toEqual(12)
  })
  it('should work for case 2', () => {
    expect(beeramid(5000, 3)).toEqual(16)
  })
})

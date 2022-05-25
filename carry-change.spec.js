/**

No one enjoys carrying around spare change. And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something. So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.

For example: US Currency includes the penny, nickel, dime and quarter or the coins with denominations: [1, 5, 10, 25] If I were to ask you to make 75 cents you would return 3 since 75 cents can be made with 3 quarters.

NOTES:

The coin denominations will contain at least one coin and will be greater than zero. [3] or [1, 100, 19] are both valid.
All amounts given will be solvable.
Be greedy...

Source: https://www.codewars.com/kata/58dfc0d8ca6895cb4e00005c
*/

/**
 * fails performance test due to stack size
 */
function coinsNeeded(amount, coinDenominations, iter = 0) {
  if (amount === 0) return iter;
  if (iter === 0) {
    coinDenominations = coinDenominations.sort((a, b) => a - b).reverse();
  }
  const coin = coinDenominations.find((c) => c <= amount);
  const coins = Math.floor(amount / coin);
  return coinsNeeded(amount % coin, coinDenominations, iter + coins);
}

// function coinsNeeded(amount, coinDenominations) {
//   coinDenominations = coinDenominations.sort((a, b) => a - b).reverse();
//   let coins = 0;
//   for (let i = 0; i < coinDenominations.length; i++) {
//     const coin = coinDenominations[i];
//     while (coin <= amount) {
//       amount -= coin;
//       coins++;
//     }
//   }
//   return coins;
// }

describe("A Captial Challenge code-test", () => {
  const coins1 = [1, 5, 10, 25];
  const coins2 = [1, 2, 5, 10, 20, 50];

  it("75 is 25+25+25", () => {
    expect(coinsNeeded(75, coins1)).toEqual(3);
  });
  it("123 is 25+25+25+25+10+10+1+1", () => {
    expect(coinsNeeded(123, coins1)).toEqual(9);
  });
  it("75 is 50+20+5", () => {
    expect(coinsNeeded(75, coins2)).toEqual(3);
  });
  it("123 is 50+50+20+2+1", () => {
    expect(coinsNeeded(123, coins2)).toEqual(5);
  });
});

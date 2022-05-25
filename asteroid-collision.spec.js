/**
 *

Zach Willard  8:15 AM
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

https://leetcode.com/problems/asteroid-collision/

*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let result = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      result.push(asteroids[i]);
    } else {
      let collider = Math.abs(asteroids[i]);
      let lastAsteroid = result.pop();

      do {
        // console.log({ result, collider, lastAsteroid });
        if (lastAsteroid < collider && lastAsteroid > 0) {
          lastAsteroid = result.pop();
        } else if (lastAsteroid === collider) {
          break;
        } else {
          break;
        }
      } while (result.length > 0 && collider > lastAsteroid);
      if (lastAsteroid < 0) {
        result.push(lastAsteroid);
      }
      console.log({ result, collider, lastAsteroid });

      if (collider > lastAsteroid || lastAsteroid === undefined) {
        result.push(-collider);
      } else if (collider < lastAsteroid) {
        result.push(lastAsteroid);
      }
    }
  }
  return result;
};

describe("asteroid collision code-test", () => {
  it("should handle case 1", () => {
    expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
  });
  it("should handle case 2", () => {
    expect(asteroidCollision([8, -8])).toEqual([]);
  });
  it("should handle case 3", () => {
    expect(asteroidCollision([10, 2, -5])).toEqual([10]);
  });
  it("should handle case 3", () => {
    expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
  });
});

/**
 Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Source: https://leetcode.com/problems/merge-intervals/*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const merge = function (intervals) {
  const allNums = intervals.sort((a, b) => a[0] - b[0]);
  let mergedVals = [];
  let interval = [];
  let isOverlapping = false;
  while (allNums.length > 0) {
    let currentVal = allNums.shift();
    if (interval.length < 2) {
      interval.push(currentVal);
    } else if (interval[0] === interval[1]) {
      mergedVals.push(interval);
      interval = [currentVal];
    } else if (currentVal < interval[0]) {
      interval[0] = currentVal;
      isOverlapping = true;
    } else if (currentVal > interval[1] && isOverlapping) {
      interval[1] = currentVal;
      mergedVals.push(interval);
      interval = [];
      isOverlapping = false;
    } else if (currentVal > interval[1]) {
      mergedVals.push(interval);
      interval = [currentVal];
    } else {
      isOverlapping = true;
    }
  }
  if (interval.length > 0) {
    mergedVals.push(interval);
  }
  return mergedVals;
};

describe("A merge-interval code-test", () => {
  it("should handle hello", () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  it("should handle HELLO", () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ])
    ).toStrictEqual([[1, 5]]);
  });
  it("should workd", () => {
    expect(
      merge([
        [1, 4],
        [0, 4],
      ])
    ).toStrictEqual([[0, 4]]);
  });
  it("should workd", () => {
    expect(
      merge([
        [1, 4],
        [0, 0],
      ])
    ).toStrictEqual([
      [0, 0],
      [1, 4],
    ]);
  });
});

/**
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 
Source: https://leetcode.com/problems/palindrome-partitioning/

*/

const partition = function (
  phrase,
  results = new Set(),
  depth = 1,
  flipped = false
) {
  const regex = new RegExp(`.{1,${depth}}`, "g");
  const palindromes = phrase.match(regex);
  const isAllPalindromes = palindromes.every(
    (p) => p === p.split("").reverse().join("")
  );
  if (isAllPalindromes) {
    results.add(
      flipped ? palindromes.reverse().toString() : palindromes.toString()
    );
  }
  if (depth === phrase.length && !flipped) {
    return partition(phrase.split("").reverse().join(""), results, 1, true);
  } else if (depth === phrase.length) {
    return Array.from(results).map((r) => r.split(","));
  }
  return partition(phrase, results, depth + 1, flipped);
};

describe("A palindrome-partition code-test", () => {
  it("should handle case 1", () => {
    expect(partition("aab")).toStrictEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });
  it("should handle case 2", () => {
    expect(partition("a")).toStrictEqual([["a"]]);
  });
  it("should handle case 3", () => {
    expect(partition("bb")).toStrictEqual([["b", "b"], ["bb"]]);
  });
  it("should handle case 4", () => {
    expect(partition("cdd")).toStrictEqual([
      ["c", "d", "d"],
      ["c", "dd"],
    ]);
  });
  it("should handle case 5", () => {
    expect(partition("efe")).toStrictEqual([["e", "f", "e"], ["efe"]]);
  });
  it("should handle case 6", () => {
    expect(partition("abbab")).toStrictEqual([
      ["a", "b", "b", "a", "b"],
      ["a", "b", "bab"],
      ["a", "bb", "a", "b"],
      ["abba", "b"],
    ]);
  });
});

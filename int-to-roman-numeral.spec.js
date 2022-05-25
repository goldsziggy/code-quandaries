/**
 *
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 

Constraints:

    1 <= num <= 3999
Source: https://leetcode.com/problems/integer-to-roman/*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */


/**
 *     let roman = '';
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i < nums.length; i++) {
        while (num >= nums[i]) {
            roman += romans[i];
            num -= nums[i];
        }
    }
    return roman;
    */

    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

var intToRoman = function (num, i=0) {
    if(num >= nums[i]) {
        return romans[i] + intToRoman(num-nums[i], i);
    } if (i === nums.length - 1) {
        return '';
    } else {
        return intToRoman(num, i+1);
    }
    // for (let i = 0; i < nums.length; i++) {
    //     while (num >= nums[i]) {
    //         roman += romans[i];
    //         num -= nums[i];
    //     }
    // }
    // return roman;
};


describe("int to roman numeral code-test", () => {
  it("should handle case 1", () => {
    expect(intToRoman(3)).toEqual('III');
  });
  it("should handle case 2", () => {
    expect(intToRoman(58)).toEqual('LVIII');
  });
  it("should handle case 3", () => {
    expect(intToRoman(1994)).toEqual('MCMXCIV');
  });
});


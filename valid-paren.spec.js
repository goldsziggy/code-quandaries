/**
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= length of input <= 100

    All inputs will be strings, consisting only of characters ( and ).
    Empty strings are considered balanced (and therefore valid), and will be tested.
    For languages with mutable strings, the inputs should not be mutated.


Source; https://www.codewars.com/kata/valid-parentheses-1
*/

/**
 *
 * @param {String} str
 */
function validParentheses(str, val=0) {
  if(str.length === 0 && val === 0) return true;
  if(val < 0 || str.length === 0) return false
  const paren = str.substring(0,1)
  return validParentheses(str.slice(1), paren === '(' ? val + 1 : val - 1)
}

describe("A where is mothers code-test", () => {
  it("case 1", () => {
    expect(validParentheses("()")).toEqual(true);
    expect(validParentheses(")(()))")).toEqual(false);
    expect(validParentheses("(")).toEqual(false);
    expect(validParentheses("(())((()())())")).toEqual(true);
    expect(validParentheses("(())((()())()))(")).toEqual(false);
  });
});

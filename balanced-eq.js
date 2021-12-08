/**
Given a string with any number of open/closed parenthesis, return true if the parenthesis are well-formed, false otherwise.
(x+2)*(x-4) === true
(x+2))*(x-4) === false
(()) === true
((()) === false
 */

/**
 *
 * @param {String} str
 */
const isBalanced = (str) => {
  const buckets = str.split("").reduce((acc, curr) => {
    return { ...acc, [curr]: (acc[curr] || 0) + 1 };
  }, {});
  return buckets["("] === buckets[")"];
};

const test = isBalanced("(x+2)*(x-4)");

console.log(test);

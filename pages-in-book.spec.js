/**
 *
Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.
Example

If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.

Here's the opposite kata, which is more complex (Paginating a huge book)

Source; https://www.codewars.com/kata/622de76d28bf330057cd6af8
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var amountOfPages = function (summary) {
  let page = 0;
  let digits = "";
  do {
    page++;
    digits += `${page}`;
  } while (digits.length < summary);
  return page;
};

describe("asteroid collision code-test", () => {
  it("should handle case 1", () => {
    expect(amountOfPages(5)).toEqual(5);
  });
  it("should handle case 2", () => {
    expect(amountOfPages(25)).toEqual(17);
  });
  it("should handle case 3", () => {
    expect(amountOfPages(1095)).toEqual(401);
  });
  it("should handle case 3", () => {
    expect(amountOfPages(185)).toEqual(97);
  });
});

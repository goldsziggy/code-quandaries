/**
Playing with passphrases

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

Source: https://www.codewars.com/kata/559536379512a64472000053/train/javascript

*/

const playPass = function (phrase, shift) {
  return phrase
    .split("")
    .map(function (char, index) {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        const boundry = charCode >= 97 ? 97 : 65;
        const shiftedCharCode = ((charCode - boundry + shift) % 26) + boundry;

        if (index % 2 === 0) {
          return String.fromCharCode(shiftedCharCode).toUpperCase();
        } else {
          return String.fromCharCode(shiftedCharCode).toLowerCase();
        }
      } else if (char.match(/[0-9]/)) {
        return (9 - parseInt(char)).toString();
      } else {
        return char;
      }
    })
    .reverse()
    .join("");
};

describe("A passphrase code-test", () => {
  // it("should handle case", () => {
  //   expect(playPass("I LOVE YOU!!!", 1)).toBe("!!!vPz fWpM J");
  // });
  // it("should handle case2", () => {
  //   expect(
  //     playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
  //   ).toBe("4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");
  // });
  it("should handle case 3", () => {
    expect(
      playPass(
        "IN 2012 TWO CAMBRIDGE UNIVERSITY RESEARCHERS ANALYSED PASSPHRASES FROM THE AMAZON PAY SYSTEM...",
        20
      )
    ).toBe(
      "...gYnMsM SuJ HiTuGu yBn gIlZ MyMuLbJmMuJ XyMsFuHu mLyBwLuYmYl sNcMlYpChO YaXcLvGuW IqN 7897 hC"
    );
  });
});

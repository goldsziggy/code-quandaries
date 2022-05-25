/**

Top 2 Deck Combinations (PERFORMANCE IS KEY!!!)

Description
Given a large array of decks, return the 2 best possible deck sets. A deck set consists of 4 entirely unique decks (no card can be in the same deck set twice). Each deck consists of 8 cards, so each deck set will need to be 32 unique cards.

Example of a deck:
{ 
  cards: ['archers', 'giant', 'goblins', 'skeletons', 'arrows', 'minions', 'hog-rider', 'tesla'],
  rating: 83
}

Output:
Should return an array of 2 arrays containing the 4 decks. Output[0] should be the best possible deck set combination. Output[1] should be the 2nd best possible combination.

[
  [
    {}, //deck 1
    {}, //deck 2
    {}, //deck 3
    {} //deck 4
  ],
  [
    {}, //deck 1
    {}, //deck 2
    {}, //deck 3
    {} //deck 4
  ]
]


*/
const DECK_CONSTANT = require("./testDecks.json");
const fs = require("fs");
const path = require("path");
const { performance } = require("perf_hooks");

function hasDuplicateCard(existingCards, newCards) {
  for (let i = 0; i < newCards.length; i++) {
    if (existingCards.has(newCards[i])) {
      return true;
    }
  }

  return false;
}
function findNextUnique(combo, splitDecks) {
  for (let i = 0; i < splitDecks.length; i++) {
    const deckCards = splitDecks[i].cards;
    if (!hasDuplicateCard(combo.cards, deckCards)) {
      return {
        cards: new Set([...Array.from(combo.cards), ...deckCards]),
        decks: [...combo.decks, splitDecks[i]],
        lastIndex: i,
      };
    }
  }
  return { ...combo, lastIndex: splitDecks.length };
}

function findUniques(numberOfUniques) {
  const uniqueDeckCombos = [];

  for (let i = 0; i < DECK_CONSTANT.length; i++) {
    let combo = {
      cards: new Set(DECK_CONSTANT[i].cards),
      decks: [DECK_CONSTANT[i]],
      lastIndex: 0,
    };

    for (
      let k = i + 1;
      k < DECK_CONSTANT.length && combo.decks.length !== numberOfUniques;
      k++
    ) {
      const { cards, decks, lastIndex } = findNextUnique(
        combo,
        DECK_CONSTANT.slice(k)
      );

      combo.cards = cards;
      combo.decks = decks;
      combo.lastIndex = lastIndex;
      k = lastIndex;
    }
    if (combo.decks.length === numberOfUniques) {
      uniqueDeckCombos.push(combo.decks);
    }
  }
  console.log(uniqueDeckCombos);
  // write file
  // fs.writeFileSync(
  //   path.join(__dirname, "uniques.json"),
  //   JSON.stringify(uniqueDeckCombos)
  // );

  return uniqueDeckCombos;
}
var startTime = performance.now();
const data = findUniques(2);
var endTime = performance.now();
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
console.log("number of matches: " + data.length);
// describe("A unique deck-building code-test", () => {
//   it("case 1", () => {
//     expect(findUniques(2)).toEqual(false);
//   });
// });

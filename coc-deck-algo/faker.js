const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

const TOTAL_WORDS = 800;

const words = faker.random.words(TOTAL_WORDS).split(" ");

let decks = [];

for (let i = 0; i < 100; i++) {
  const cards = [];

  for (let j = 0; j < 8; j++) {
    cards.push(words[faker.mersenne.rand(TOTAL_WORDS, 0)]);
  }
  decks.push({ cards });
}
fs.writeFileSync(path.join(__dirname, "decks.json"), JSON.stringify(decks));
console.log(decks);

const fs = require("fs");
const path = require("path");

function findIncreasingReducer(prev, current, curIdx, arr) {
  if (curIdx === 0) {
    return 0; // skip first element
  }
  if (parseInt(arr[curIdx]) > parseInt(arr[curIdx - 1])) {
    return parseInt(prev) + 1;
  }
  return prev;
}

function slidingSumOfThree(prev, current, curIdx, arr) {
  if (curIdx < arr.length - 2) {
    prev.push(
      parseInt(arr[curIdx]) +
        parseInt(arr[curIdx + 1]) +
        parseInt(arr[curIdx + 2])
    );
    return prev;
  }
  return prev;
}

function part1() {
  const data = fs
    .readFileSync(path.join(__dirname, "data/day1.data"), { encoding: "utf8" })
    .split("\n")
    .reduce(findIncreasingReducer, 0);
  console.log(data);
}

function part2() {
  const data = fs
    .readFileSync(path.join(__dirname, "data/day1.data"), { encoding: "utf8" })
    .split("\n")
    .reduce(slidingSumOfThree, [])
    .reduce(findIncreasingReducer, 0);

  console.log(data);
}

part2();

const fs = require("fs");
const path = require("path");

function calcPos(prev, current, curIdx, arr) {
  const [dir, amnt] = arr[curIdx].split(" ");
  const amount = parseInt(amnt);
  if (dir === "up") {
    return [prev[0], prev[1] - amount];
  } else if (dir === "down") {
    return [prev[0], amount + prev[1]];
  } else if (dir === "forward") {
    return [prev[0] + amount, prev[1]];
  }
  return prev;
}

function calcPosWithAim(prev, current, curIdx, arr) {
  const [dir, amnt] = arr[curIdx].split(" ");
  const amount = parseInt(amnt);
  if (dir === "up") {
    return [prev[0], prev[1] - amount, prev[2]];
  } else if (dir === "down") {
    return [prev[0], amount + prev[1], prev[2]];
  } else if (dir === "forward") {
    return [prev[0] + amount, prev[1], prev[2] + prev[1] * amount];
  }
  return prev;
}

function part1() {
  const data = fs
    .readFileSync(path.join(__dirname, "data/day2.data"), { encoding: "utf8" })
    .split("\n")
    .reduce(calcPos, [0, 0]);
  console.log(data);
  console.log(data[0] * data[1]);
}

function part2() {
  const data = fs
    .readFileSync(path.join(__dirname, "data/day2.data"), { encoding: "utf8" })
    .split("\n")
    .reduce(calcPosWithAim, [0, 0, 0]);
  console.log(data);
  console.log(data[0] * data[2]);
}

part2();

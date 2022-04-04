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

function calcGamma(origArrayLen, posSums) {
  return posSums.map((val, idx) => {
    console.log({ val, origArrayLen });
    return val > origArrayLen / 2 ? 1 : 0;
  });
}

function calcEpsilon(gamma) {
  return gamma.map((val) => {
    return val === 1 ? 0 : 1;
  });
}

function calcSumOfPos(prev, current, curIdx, arr) {
  const binNum = arr[curIdx];
  binNum.split("").forEach((val, idx) => {
    prev[idx] = prev[idx] + parseInt(val) || parseInt(val);
  });
  return prev;
}

function part2() {
  const data = fs
    .readFileSync(path.join(__dirname, "data/day3.data"), { encoding: "utf8" })
    .split("\n")
    .reduce(calcSumOfPos, []);
  console.log(data);
}

function part1() {
  const origArray = fs
    .readFileSync(path.join(__dirname, "data/day3.data"), { encoding: "utf8" })
    .split("\n");

  const posSums = origArray.reduce(calcSumOfPos, []);
  console.log({ posSums });
  const gamma = calcGamma(origArray.length, posSums);
  const epsilon = calcEpsilon(gamma);

  console.log(parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2));
  // console.log(data[0] * data[2]);
}

part1();

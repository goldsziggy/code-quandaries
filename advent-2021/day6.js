const fs = require("fs");
const path = require("path");

function recur(arr, iter) {
  if (iter === 0) {
    return arr;
  }
  let totalZeros = 0;
  const mapped = arr.map((val) => {
    if (val === 0) {
      totalZeros++;
      return 6;
    }
    return val - 1;
  });

  return recur(
    [...mapped, ...Array.from({ length: totalZeros }, () => 8)],
    iter - 1
  );
}

function part1() {
  const origArray = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data/day6.data"), {
      encoding: "utf8",
    })
  );
  console.log(origArray);
  const fish = recur(origArray, 80);

  console.log(fish.length);
}

part1();

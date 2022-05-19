function twoArePositive(a, b, c) {
  return ([a, b, c].filter((x) => x > 0).length) === 2 ? true : false;
}

console.log(twoArePositive(1, 4, -3));
console.log(twoArePositive(1, -4, -3));

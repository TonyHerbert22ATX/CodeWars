function squareOrSquareRoot(array) {
  return array.map((x) => {
    if (Math.sqrt(x) % 1 === 0) {
      return Math.sqrt(x);
    }
    return x * x;
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// console.log(nameShuffler(960000));

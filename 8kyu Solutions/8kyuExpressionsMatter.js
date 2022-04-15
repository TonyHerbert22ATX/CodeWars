function expressionMatter(a, b, c) {
  let one = a * (b + c);
  let two = a * b * c;
  let three = (a + b) * c;
  let four = a + b * c;
  let five = a + b + c;
  return Math.max(one, two, three, four, five);
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 3, 1));
console.log(expressionMatter(2, 2, 2));
// console.log(getCount(''))
// console.log(getCount(''))

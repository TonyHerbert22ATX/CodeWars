function isDigit(s) {
  return s == parseFloat(s)
}

console.log(isDigit("0.9858154865008544"));
console.log(isDigit(" 3 "));
console.log(isDigit("-3"));
console.log(isDigit("-234.5"));

console.log(isDigit("s2324"));
console.log(isDigit("zero"));
console.log(isDigit("3 5"));
console.log(isDigit("  3  5"));

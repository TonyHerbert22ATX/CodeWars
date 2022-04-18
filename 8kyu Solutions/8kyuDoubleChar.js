function doubleChar(str) {
  return (str.split("").map((x) => x + x)).join('');
}

console.log(doubleChar("abc"));
console.log(doubleChar("Adidas"));
// console.log(rps("paper", "rock"));
// console.log(rps("rock", "rock"));

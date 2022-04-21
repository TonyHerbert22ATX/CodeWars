function toAlternatingCase(str) {
  return str
    .split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
}

console.log(toAlternatingCase("HELLO"));
console.log(toAlternatingCase("HellO"));
console.log(toAlternatingCase("hello"));
console.log(toAlternatingCase("helLo"));


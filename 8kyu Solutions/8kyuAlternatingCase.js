function toAlternatingCase(str) {
  return str
    .split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
}

console.log(toAlternatingCase("HELLO"));
console.log(toAlternatingCase("HellO"));
console.log(toAlternatingCase("hello"));
// console.log(feast("brown bear", "bear claw"));
// console.log(firstNonConsecutive("RqaEzty"));
// console.log(firstNonConsecutive("cwAt"));

function sameCase(a, b) {
  return /[a-z]/i.test(a) && /[a-z]/i.test(b)
    ? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
    : -1
}

console.log(sameCase("C", "B"));
console.log(sameCase("A", "s"));
console.log(sameCase(" ", "s"));
console.log(sameCase(" ", "Z"));
console.log(sameCase(":", "B"));

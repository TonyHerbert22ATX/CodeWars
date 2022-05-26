// ? This was my first solution
// function firstToLast(str, c) {
//   let one = str.indexOf(c);
//   let back = str.lastIndexOf(c);
//   return one < 0 ? one : back - one;
// }

// * Refactor to one line
function firstToLast(str, c) {
  return str.indexOf(c) < 0
    ? str.indexOf(c)
    : str.lastIndexOf(c) - str.indexOf(c);
}

console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));

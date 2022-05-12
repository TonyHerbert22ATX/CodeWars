// function removeZeros(a) {
//   return a
//     .join("")
//     .replace(/^0|0+$/g, "")
//     .split("")
//     .map(Number);
// }

// removeZeros = (a) =>a.join("").replace(/^0+|0+$/g, "").split("").map(x=>+x)


removeZeros = (a) => eval("[" + /[1-9].*[1-9]/.exec(a) + "]");

// !! I had to look this up. We should never use EVAL() .... LIKE EVER!

console.log(removeZeros([0, 9, 0, 4]));
console.log(removeZeros([1, 0, 2, 3, 0, 0]));

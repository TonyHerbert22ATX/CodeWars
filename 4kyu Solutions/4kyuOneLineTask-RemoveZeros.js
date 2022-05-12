function removeZeros(a) {
  return a
    .join("")
    .replace(/^0|0+$/g, "")
    .split("")
    .map(Number);
}

removeZeros = (a) =>a.join("").replace(/^0+|0+$/g, "").split("").map(x=>+x)

console.log(removeZeros([0, 9, 0, 4]));
console.log(removeZeros([1, 0, 2, 3, 0, 0]));

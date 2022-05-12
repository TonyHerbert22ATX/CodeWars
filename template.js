function removeZeros(array) {
  return [
    ...array[`filter`]((v) => v !== 0 && v !== "0"),
    ...array[`filter`]((v) => v === 0 || v === "0"),
  ];
}

console.log(removeZeros([0, 9, 0, 4]));
console.log(removeZeros([1, 0, 2, 3, 0, 0]));

function sumNumbers() {
  let arg = Array.from(arguments);
  return arg.reduce((acc, count) => {
    if (typeof count === "number") {
      acc += count;
    }
    return acc;
  }, 0);
}

console.log(sumNumbers());
console.log(sumNumbers("symbol"));
console.log(sumNumbers(1));
console.log(sumNumbers(1, 2));
console.log(sumNumbers("something", 1, 2));

function howManySmaller(arr, n) {
  let decimal = arr.map((x) => x.toFixed(2));
  let smaller = decimal.filter((x) => x < n);
  return smaller.length
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));

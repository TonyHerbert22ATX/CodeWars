function sumArray(array) {
  if (array === null || array === undefined || array === "") {
    return 0;
  } else {
    let sum = array.sort((a, b) => a - b);
    let removeHigh = sum.pop();
    let removeLow = sum.shift();
    return sum.reduce((acc, i) => acc + i, 0);
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([3, 5]));

// console.log(filter_list([1, "a", "b", 0, 15]));
// console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

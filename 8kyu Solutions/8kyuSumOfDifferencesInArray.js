function sumOfDifferences(arr) {
  let highToLow = arr.sort((a, z) => z - a);
  let total = 0;
  for (let i = 0; i < highToLow.length - 1; i++) {
    total += highToLow[i] - highToLow[i + 1];
  }
  return total;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([17, -17]));
console.log(sumOfDifferences([9, 7, 5, 3, 1, -3, -4, -5, -8, -8, -9, -9, -9]));

// 9
// 2
// 34
// 18

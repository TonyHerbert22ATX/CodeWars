function sumMix(x) {
  return x.map(str => +str).reduce((acc,i) => acc + i, 0)
}

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
// console.log(getCount(''))
// console.log(getCount(''))

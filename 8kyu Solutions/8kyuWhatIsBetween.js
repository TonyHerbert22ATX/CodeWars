function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr
}

console.log(between(1, 4));
console.log(between(-2, 2));
// console.log(index([1, 2], 3));
// console.log(index([1, 2], 2));

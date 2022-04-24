function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  }
}

console.log(getRealFloor(1));
console.log(getRealFloor(0));
console.log(getRealFloor(5));
console.log(getRealFloor(15));

// console.log(hello());
// console.log(index([1, 2], 3));
// console.log(index([1, 2], 2));

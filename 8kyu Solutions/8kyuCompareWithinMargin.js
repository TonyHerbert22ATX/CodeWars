function closeCompare(a, b, margin) {
  if (margin === undefined) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  if (margin >= Math.abs(a - b)) {
    return 0;
  }
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(6, 5));
console.log(closeCompare(-6, -5));

console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));
console.log(closeCompare(2835, 4539, 9908));
console.log(closeCompare(-5460, -9229, 8582));

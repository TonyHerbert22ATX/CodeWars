function findDifference(a, b) {
  let volumeA = a[0] * a[1] * a[2];
  let volumeB = b[0] * b[1] * b[2];
  return Math.abs(volumeA - volumeB);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));

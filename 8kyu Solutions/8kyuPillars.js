function pillars(num_pill, dist, width) {
  if (num_pill <= 1) {
    return 0;
  } else {
    return dist * 100 * (num_pill - 1) + width * (num_pill - 2);
  }
}

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

// 100 cm to 1 m


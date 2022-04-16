function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : Math.abs(cap - on - wait);
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
console.log(enough(73, 50, 37));

// 1 km/h = 27.777778 cm/s

function distinct(a) {
  return Array.from(new Set(a));
}

console.log(distinct([1, 1, 25]));
console.log(distinct("Walter"));

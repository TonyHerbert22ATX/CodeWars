function remainder(n, m) {
  if (n > m) {
    return n % m;
  } else if (n < m) {
    return m % n;
  } else if (n === m) {
    return -n%m
  } else {
    return NaN;
  }
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(-13, -13));
console.log(remainder(0, 0));

function product(a, b) {
  let result = 1;
  for (let i = a + 1; i < b; i++) {
    console.log(i);
    result *= i;
  }
  return result == 1 ? "Error" : result;
}

console.log(product(2, 6));
console.log(product(2, 0));

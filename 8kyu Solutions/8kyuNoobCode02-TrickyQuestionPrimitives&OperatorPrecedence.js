function greaterThanLessThan(a, b, c) {
    
    return (a < b < c);
}

console.log(greaterThanLessThan(Number(null), 0, 1));
console.log(greaterThanLessThan(-9, -8, 7));
console.log(greaterThanLessThan(700000000001, 700000000002, -1));
console.log(greaterThanLessThan(-9, -8, -7));

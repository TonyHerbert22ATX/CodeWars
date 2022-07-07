function GeometricSequenceSum(a, r, n) {
    let arr = [a];
    for (let i = 1; i < n; i++) {
        arr.push((a *= r));
    }
    return arr.reduce((a, c) => a + c, 0)
}

console.log(GeometricSequenceSum(2, 3, 5));
console.log(GeometricSequenceSum(1, 1, 2));
console.log(GeometricSequenceSum(2, 2, 10));

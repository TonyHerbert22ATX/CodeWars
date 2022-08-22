function sumTriangularNumbers(n) {
    if (n < 0) return 0;
    let result = [0];
    for (let i = 0; i <= n; i++) {
        result.push(i * i - result[i]);
    }
    return result.reduce((a, c) => a + c, 0);
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));

function rowSumOddNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n ** 2 + n; i += 2) {
        arr.push(i);
    }
    return arr.splice(-n).reduce((a, c) => a + c, 0);
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(42));

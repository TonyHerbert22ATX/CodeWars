function SeriesSum(n) {
    if (n === 0) return '0.00';
    if (n === 1) return "1.00";
    let arr = [1, 1 / 4];
    let p = 4;
    for (let i = 2; i < n; i++) {
        arr.push(1 / (p += 3));
    }
    return arr.reduce((a, c) => a + c).toFixed(2)
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));

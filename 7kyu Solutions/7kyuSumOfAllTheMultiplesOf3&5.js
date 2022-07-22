function findSum(n) {
    let arr = [];
    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0) {
            arr.push(i);
        } else if (i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr.reduce((a, c) => a + c, 0);
}

console.log(findSum(5));
console.log(findSum(10));

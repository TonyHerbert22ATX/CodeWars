function factorial(n) {
    if(n < 0 || n > 12) throw RangeError
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    if (arr === []) {
        return 1;
    } else {
        return arr.reduce((a, c) => a * c, 1);
    }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));

function factorial(n) {
    if (n < 2) return 1;
    let result = [];
    for (let i = n - 1; i > 0; i--) {
        result.push(i);
    }
    return result.reduce((a, c) => a * c, n)
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

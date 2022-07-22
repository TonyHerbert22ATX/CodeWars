// Return the nth triangular number
function triangular(n) {
    if (n < 0) return 0;
    let count = 0;
    for (let i = 0; i <= n; i++) {
        count += i;
    }
    return count
}

console.log(triangular(1));
console.log(triangular(2));
console.log(triangular(3));
console.log(triangular(4));



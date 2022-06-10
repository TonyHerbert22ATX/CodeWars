function nole(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2) {
            res *= i;
        } else {
            res /= i;
        }
    }
    return res;
}

console.log(nole(5));
console.log(nole(10));

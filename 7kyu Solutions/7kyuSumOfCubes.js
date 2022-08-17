function sumCubes(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i ** 3
    }
    return total
}

console.log(sumCubes(2));
console.log(sumCubes(3));

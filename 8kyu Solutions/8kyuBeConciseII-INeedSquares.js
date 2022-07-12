function squaresOnly(a) {
    return a
        .map((x) => Math.sqrt(x))
        .filter((x) => Number.isInteger(x))
        .map((x) => x ** 2);
}

console.log(squaresOnly([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(squaresOnly([31, 33, 35, 37, 39, 38, 36, 34, 32]));
console.log(squaresOnly([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

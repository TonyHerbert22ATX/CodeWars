function arrayMadness(a, b) {
    let y = a.map((x) => Math.pow(x, 2)).reduce((a, c) => a + c, 0);
    let z = b.map((x) => Math.pow(x, 3)).reduce((a, c) => a + c, 0);
    return y > z
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([5, 6, 7], [4, 5, 6]));

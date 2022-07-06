function sumSquares(array) {
    return array.reduce((a, c) => a + Math.pow(c, 2), 0);
}

console.log(sumSquares([1, 2, 3, 4, 5]));

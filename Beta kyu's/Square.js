function squareRoot(numbers) {
    let sum = numbers.reduce((acc, count) => (acc += count), 0);
    let square = Math.sqrt(sum);
    if (sum === 0) {
        return 0;
    } else if (square * Math.floor(square) === sum) {
        return square;
    } else {
        return sum;
    }
}

console.log(squareRoot([4, 6, 7, 7, 1]));
console.log(squareRoot([4]));
console.log(squareRoot([0]));
console.log(squareRoot([4, 3, 6, 1, 3, 6, 1, 3, 4, 5, 6, 1, 2, 3, 5, 1, 1]));

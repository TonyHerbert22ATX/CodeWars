let countSquares = function (cuts) {
    return cuts === 0 ? 1 : 6 * cuts * cuts + 2;
};

console.log(countSquares(1));
console.log(countSquares(2));
console.log(countSquares(4));
console.log(countSquares(5));

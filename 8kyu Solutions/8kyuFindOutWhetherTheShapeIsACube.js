let cubeChecker = function (volume, side) {
    return side ** 3 <= 0 ? false : volume === side ** 3;
};

console.log(cubeChecker(56.3, 1));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(0, 0));

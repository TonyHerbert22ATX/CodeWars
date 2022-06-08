function functionFactory(x, y, operator) {
    return function () {
        return eval(`${x}${operator}${y}`);
    };
}

console.log(functionFactory(2, 3, "+"));
console.log(functionFactory(2, 3, "-"));

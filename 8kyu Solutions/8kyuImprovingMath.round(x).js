Math.roundTo = function (number, precision) {
    return +number.toFixed(precision);
    // console.log(a);
};

console.log(Math.roundTo(3.1415926535, 4));
console.log(Math.roundTo(4, 5));

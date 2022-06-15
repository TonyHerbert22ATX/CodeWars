function multiply(number) {
    let l = String(number).length;
    if (number > 0) {
        for (let i = l; i > 0; i--) {
            number *= 5;
        }
    } else {
        for (let i = l - 1; i > 0; i--) {
            number *= 5;
        }
    }
    return number;
}

console.log(multiply(10));
console.log(multiply(5));
console.log(multiply(200));
console.log(multiply(-2));

function numberToPower(number, power) {
    let total = number;
    for (let i = power; i > 1; i--) {
        total *= number;
    }
    return power === 0 ? 1 : total;
}

console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));

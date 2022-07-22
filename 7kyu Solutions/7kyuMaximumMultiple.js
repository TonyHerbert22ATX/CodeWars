function maxMultiple(divisor, bound) {
    let result = 0;
    for (let i = 2; i <= bound; i++) {
        if (i % divisor === 0) {
            result = i;
        }
    }
    return result;
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
console.log(maxMultiple(7, 17));
console.log(maxMultiple(10, 50));

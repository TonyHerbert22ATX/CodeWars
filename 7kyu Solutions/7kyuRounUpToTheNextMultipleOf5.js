function roundToNext5(n) {
    if (n >= 0) {
        while (n % 5 !== 0) {
            n++;
        }
        return n;
    }
    if (n < 0) {
        while (n % 5 !== 0) {
            n++;
        }
        return n;
    }
}

console.log(roundToNext5(0));
console.log(roundToNext5(2));
console.log(roundToNext5(-3));
console.log(roundToNext5(-5));
console.log(roundToNext5(-7));
console.log(roundToNext5(12));
console.log(roundToNext5(21));

function unluckyDays(year) {
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) {
            unlucky++;
        }
    }
    return unlucky;
}

console.log(unluckyDays(1586));
console.log(unluckyDays(1001));

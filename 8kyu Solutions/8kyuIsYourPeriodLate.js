function periodIsLate(last, today, cycleLength) {
    return cycleLength >= (today - last) / 86400000 ? false : true;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));

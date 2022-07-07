function gbpchf(gbp) {
    return `${(gbp * 1.31).toFixed(2)} Swiss Franks`
}

console.log(gbpchf(10));
console.log(gbpchf(256));

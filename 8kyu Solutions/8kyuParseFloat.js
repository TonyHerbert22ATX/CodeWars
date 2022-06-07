function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF("1"));
console.log(parseF(NaN));
console.log(parseF("2.5"));

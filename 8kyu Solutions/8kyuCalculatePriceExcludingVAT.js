function excludingVatPrice(price) {
    if (price === 0) {
        return 0;
    } else if (!price) {
        return -1;
    } else {
        return +(price - (price / 1.15) * 0.15).toFixed(2);
    }
}

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));
console.log(excludingVatPrice());
console.log(excludingVatPrice(0));

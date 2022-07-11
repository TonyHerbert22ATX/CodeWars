function dBScale(intensity) {
    return 10 * Math.log10(intensity / Math.pow(10, -12));
}

console.log(dBScale(Math.pow(10, -11)));

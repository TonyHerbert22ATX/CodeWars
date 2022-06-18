function typeOfSum(a, b) {
    return typeof (a + b);
}

console.log(typeOfSum(12, 1));
console.log(typeOfSum("d", 1));
console.log(typeOfSum(true, 1));
console.log(typeOfSum("s", false));
console.log(typeOfSum(null, undefined));

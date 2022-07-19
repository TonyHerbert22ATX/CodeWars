function validatePIN(pin) {
    let isCorrectLength = pin.length == 4 || pin.length == 6;
    let hasOnlyNumbers = pin.match(/^[0-9]+$/);
    return isCorrectLength && hasOnlyNumbers ? true : false;
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("a1234"));
console.log(validatePIN("1234 "));

console.log(validatePIN("1234  "));
console.log(validatePIN("123       \n "));

console.log(validatePIN("a234"));
console.log(validatePIN("12345g"));

console.log(validatePIN("1234"));
console.log(validatePIN("123456"));

function integrate(coefficient, exponent) {
    let newE = exponent + 1
    let newC = coefficient / newE
    return `${newC}x^${newE}`
}

console.log(integrate(3, 2));
console.log(integrate(12,5));

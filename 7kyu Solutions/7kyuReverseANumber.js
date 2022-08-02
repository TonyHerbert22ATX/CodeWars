function reverseNumber(n) {
    return n > 0
        ? +String(n).split("").reverse().join("")
        : -+(n.toString().split("").slice(1).reverse().join(''))
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));

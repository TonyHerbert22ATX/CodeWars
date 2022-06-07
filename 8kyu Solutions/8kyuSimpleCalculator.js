function calculator(a, b, sign) {
    if (typeof a != "number" || typeof b != "number") {
        return "unknown value";
    }

    if (sign === "+") {
        return a + b;
    } else if (sign === "-") {
        return a - b;
    } else if (sign === "*") {
        return a * b;
    } else if (sign === "/") {
        return a / b;
    } else {
        return "unknown value";
    }
}

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "-"));
console.log(calculator(3, 5, "*"));
console.log(calculator(6, 2, "/"));
console.log(calculator(6, 2, "%"));
console.log(calculator("D", 2, "/"));

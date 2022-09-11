function calculate(num1, operation, num2) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        return num2 === 0 ? null : num1 / num2;
    } else {
        return null;
    }
}

console.log(calculate(3.2, "+", 8));

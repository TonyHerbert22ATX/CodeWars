function arithmetic(a, b, operator) {
    return operator === "add"
        ? a + b
        : operator === "subtract"
        ? a - b
        : operator === "multiply"
        ? a * b
        : operator === "divide"
        ? a / b
        : "Does not exist";
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(5, 2, "divide"));

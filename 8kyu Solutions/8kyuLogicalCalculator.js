function logicalCalc(array, op) {
    switch (op) {
        case "OR":
            return array.reduce((a, b) => a || b);
            break;
        case "AND":
            return array.reduce((a, b) => a && b);
            break;
        case "XOR":
            return array.reduce((a, b) => a != b);
            break;
    }
}

console.log(logicalCalc([true, true, true, false], "AND"));
console.log(logicalCalc([true, true, true, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));

console.log(logicalCalc([true, true, false, false], "AND"));
console.log(logicalCalc([true, true, false, false], "OR"));
console.log(logicalCalc([true, true, true, false], "XOR"));

console.log(logicalCalc([true, true, true, false], "XOR"));
console.log(logicalCalc([true, true, true, false], "XOR"));
console.log(logicalCalc([true, true, true, false], "XOR"));

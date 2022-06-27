function increaseNumber(initialValue, finalValue) {
    if (typeof initialValue !== "number" || typeof finalValue !== "number") {
        return null;
    }
    if (finalValue - initialValue > initialValue) {
        return finalValue - initialValue;
    } else {
        return null;
    }
}

console.log(increaseNumber(7, 22));
console.log(increaseNumber(70, 22));
console.log(increaseNumber(7));

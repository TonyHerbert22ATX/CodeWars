function calcWaitForOJ(flavor, amount) {
    let time = 0;

    if (amount === 0) return "It's safe to drink OJ now.";
    if (flavor === "Minty-Fresh") {
        time = Math.round(37 * amount);
        return `It's safe to drink OJ after ${time} minutes.`;
    } else if (flavor === "Lemon-Sage") {
        time = Math.round(15 * amount);
        return `It's safe to drink OJ after ${time} minutes.`;
    } else if (flavor === "Fruit-Fusion") {
        time = Math.round(24 * amount);
        return `It's safe to drink OJ after ${time} minutes.`;
    } else {
        return "It's safe to drink OJ now.";
    }
}

console.log(calcWaitForOJ("Minty-Fresh", 0));
console.log(calcWaitForOJ("Minty-Fresh", 1));
console.log(calcWaitForOJ("Minty-Fresh", 1.5));

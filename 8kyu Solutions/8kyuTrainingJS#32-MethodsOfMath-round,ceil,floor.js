function roundIt(n) {
    let before = String(n).split(".")[0].length;
    let after = String(n).split(".")[1].length;
    if (before < after) return Math.ceil(n);
    if (before > after) return Math.floor(n);
    if (before === after) return Math.round(n);
}

console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));

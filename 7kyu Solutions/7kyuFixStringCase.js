function solve(s) {
    let countUp = 0;
    let countLower = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toLowerCase()) {
            countLower++;
        } else {
            countUp++;
        }
    }
    return countLower >= countUp ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));

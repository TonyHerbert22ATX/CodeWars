function balancedNum(number) {
    let a = number.toString().split("");
    if (a.length <= 2) return "Balanced";
    let front = 0;
    let back = 0;
    if (a.length % 2 === 0) {
        a.splice(a.length / 2 - 1, 2, "s");
        front = a
            .slice(0, Math.ceil(a.length / 2) - 1)
            .reduce((a, c) => a + +c, 0);
        back = a
            .slice(-(Math.ceil(a.length / 2) - 1))
            .reduce((a, c) => a + +c, 0);
    } else {
        a.splice(Math.floor(a.length / 2), 1);
        front = a
            .splice(0, Math.floor(a.length / 2))
            .reduce((a, c) => a + +c, 0);
        back = a.reduce((a, c) => a + +c, 0);
    }
    return front === back ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7));
console.log(balancedNum(13));

console.log(balancedNum(1024));
console.log(balancedNum(295591));
console.log(balancedNum(56239814));

console.log(balancedNum(959));
console.log(balancedNum(432));
console.log(balancedNum(66545));

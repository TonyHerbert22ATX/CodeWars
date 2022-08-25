function pattern(n) {
    var output = "1";
    for (let i = 2; i <= n; i++) {
        output += "\n" + String(i).repeat(i);
    }
    return (n > 0) ? output : ''
}

console.log(pattern(0));
console.log(pattern(1));
console.log(pattern(2));
console.log(pattern(5));

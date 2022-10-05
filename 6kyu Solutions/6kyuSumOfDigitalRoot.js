function digitalRoot(n) {
    while (String(n).length > 1) {
        n = n
            .toString()
            .split("")
            .reduce((a, c) => a + +c, 0);
    }
    return n;
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));

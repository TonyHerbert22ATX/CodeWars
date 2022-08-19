function f(n) {
    let total = 0;
    if (typeof n === "number" && Math.abs(n) === n && Math.ceil(n) === n && n > 0) {
        for (let i = 0; i <= n; i++) {
            total += i;
        }
    } else {
        return false;
    }
    return total;
}

console.log(f(100));
console.log(f(-10));
console.log(f(0));
console.log(f(3.14));
console.log(f("300"));

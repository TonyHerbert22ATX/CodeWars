function sum() {
    return [...arguments].reduce((a, c) => a + c, 0);
}

console.log(sum(1));
console.log(sum(1, 2));

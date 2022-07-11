function stringy(size) {
    let result = [];
    for (let i = 1; i <= size; i++) {
        if (i % 2 === 0) {
            result.push("0");
        } else {
            result.push("1");
        }
    }
    return result.join("");
}

console.log(stringy(3));
console.log(stringy(4));
console.log(stringy(6));

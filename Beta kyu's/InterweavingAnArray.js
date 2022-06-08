function interweave(a, a2) {
    const interweavedArr = [];
    for (let i = 0; i < Math.max(a.length, a2.length); i++) {
        if (i < a.length) {
            interweavedArr.push(a[i]);
        }
        if (i < a2.length) {
            interweavedArr.push(a2[i]);
        }
    }
    return interweavedArr;
}

console.log(interweave([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(interweave([1], [2, 3, 4]));
console.log(interweave([1, 2, 3], [4]));
console.log(interweave(["string", 35], [90, "t", 23]));
console.log(interweave(["string", undefined, ""], [[], "t", NaN]));

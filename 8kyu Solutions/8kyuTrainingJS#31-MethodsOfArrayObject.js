function blackAndWhite(arr) {
    if (!Array.isArray(arr)) return "It's a fake array";
    return arr.some((x) => x === 5) && arr.some((x) => x === 13)
        ? "It's a black array"
        : "It's a white array";
}

console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
console.log(blackAndWhite([4, 10, 2]));

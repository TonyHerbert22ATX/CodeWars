function odds(values) {
    // arrow it
    return values.filter((x) => x % 2 === 1);
}

console.log(odds([]));
console.log(odds([2, 4, 6]));
console.log(odds([1, 3, 5]));
console.log(odds([1, 2, 3, 4, 5, 6]));

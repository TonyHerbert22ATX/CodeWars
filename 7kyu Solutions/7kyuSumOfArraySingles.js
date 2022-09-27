function repeats(arr) {
    let total = 0;
    let removeDups = Array.from(new Set(arr));
    for (let i = 0; i < removeDups.length; i++) {
        if (arr.filter((x) => x === removeDups[i]).length === 1) {
            total += removeDups[i];
        }
    }
    return total;
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
// console.log(repeats([4, 5, 7, 5, 4, 8]));

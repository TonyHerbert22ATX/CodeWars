function findNextSquare(sq) {
    let root = Math.sqrt(sq);
    if (Math.trunc(root) != root) return -1;
    let high = Math.pow(root + 1, 2);
    let low = Math.pow(root - 1, 2);
    return sq - high > sq - low ? low : high;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(319225));

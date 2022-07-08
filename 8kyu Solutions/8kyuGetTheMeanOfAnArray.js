function getAverage(marks) {
    return Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length)
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));

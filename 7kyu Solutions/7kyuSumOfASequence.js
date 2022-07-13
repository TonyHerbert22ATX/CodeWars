const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    let arr = [];
    for (let i = begin; i <= end; i += step) {
        arr.push(i);
    }
    return arr.reduce((a, c) => a + c, 0);
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));

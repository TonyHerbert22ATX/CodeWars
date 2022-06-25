function numOfTrees(inp, num) {
    let total = 0;
    for (let element of inp) {
        total += element[0] * element[1];
    }
    return Math.ceil(total / num);
}

console.log(
    numOfTrees(
        [
            [10, 5],
            [30, 4],
            [8, 6],
        ],
        5
    )
);
console.log(numOfTrees([[2, 9]], 5));
// 4

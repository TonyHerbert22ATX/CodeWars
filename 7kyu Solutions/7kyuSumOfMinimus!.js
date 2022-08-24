function sumOfMinimums(arr) {
    let arr2 = arr.map((e, i) => {
        return Math.min(...e);
    });
    return arr2.reduce((a, c) => a + c, 0);
}

console.log(
    sumOfMinimums([
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [21, 20, 34, 56, 100],
    ])
);

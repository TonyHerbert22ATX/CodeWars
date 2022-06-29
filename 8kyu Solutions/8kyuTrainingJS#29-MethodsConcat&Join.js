function bigToSmall(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i]);
    }
    return result.sort((a, z) => z - a).join('>')
}

console.log(
    bigToSmall([
        [1, 2],
        [3, 4],
        [5, 6],
    ])
);
console.log(
    bigToSmall([
        [1, 3, 5],
        [2, 4, 6],
    ])
);

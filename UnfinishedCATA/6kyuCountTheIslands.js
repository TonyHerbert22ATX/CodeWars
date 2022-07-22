function countIslands(image) {
    let arr = Array.from(new Set(image.map(JSON.stringify)), JSON.parse);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1 && arr[i][j + 1] === 1) {
                count += 1;
                break;
            }
        }
    }
    return count;
}

console.log(
    countIslands([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ])
);
console.log(
    countIslands([
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 0],
    ])
);
console.log(
    countIslands([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
);

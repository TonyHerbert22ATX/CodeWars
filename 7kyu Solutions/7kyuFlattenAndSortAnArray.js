"use strict";

function flattenAndSort(array) {
    return array.reduce((a, c) => a.concat(c), []).sort((a, z) => a - z);
}

console.log(flattenAndSort([]));
console.log(flattenAndSort([], []));
console.log(flattenAndSort([], [1]));
console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ])
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));

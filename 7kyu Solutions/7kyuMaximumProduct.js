function adjacentElementsProduct(array) {
    let answer = array[0] * array[1]
    for (let i = 0; i < array.length; i++) {
        if (array[i] * array[i + 1] > answer) {
            answer = array[i] * array[i + 1];
        }
    }
    return answer
}

console.log(adjacentElementsProduct([1, 2, 3,-20]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));



console.log(adjacentElementsProduct([-559, 213]));

// 119067
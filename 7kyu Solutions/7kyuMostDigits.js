function findLongest(array) {
    let size = array.map((x) => x.toString().length);
    let answer = size[0];
    for (let i = 0; i < size.length; i++) {
        if (answer < size[i]) {
            answer = size[i];
        }
    }
    let index = size.findIndex((x) => x === answer);
    return array[index];
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));

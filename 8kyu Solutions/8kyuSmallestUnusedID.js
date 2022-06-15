function nextId(ids) {
    let num = 0;
    while (ids.includes(num)) {
        num++;
    }
    return num
}

console.log(nextId([0, 1, 2, 3, 5]));
console.log(nextId([5, 0, 1, 5, 5]));
console.log(nextId([0, 1, 2, 3, 4,5,6,7,8,9,10]));

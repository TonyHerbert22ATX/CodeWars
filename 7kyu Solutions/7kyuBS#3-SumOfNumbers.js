function getSum(a, b) {
    if (a === b) return a;
    let arr = [a, b].sort((a, z) => a - z);
    let arr2 = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        arr2.push(i);
    }
    return arr2.reduce((acc, count) => (acc += count), 0);
}

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(-1, 2));
console.log(getSum(-10, 2));
console.log(getSum(-106, -507));



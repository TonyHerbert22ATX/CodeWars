function solve(arr) {
    return arr.filter((val, i) => {
        return arr.lastIndexOf(val) == i;
    });
}

console.log(solve([3, 4, 4, 3, 6, 3]));

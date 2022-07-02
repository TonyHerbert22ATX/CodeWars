function any(arr, fun) {
    return arr.map(fun).includes(true)
}

console.log(
    any([1, 2, 3, 4], function (v, i) {
        return v > 3;
    })
);

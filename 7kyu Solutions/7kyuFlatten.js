var flatten = function (array) {
    return [].concat(...array)
};


console.log(flatten([[[1, 2, 3]]]));
console.log(
    flatten([
        [1, 2, 3],
        ["a", "b", "c"],
        [1, 2, 3],
    ])
);
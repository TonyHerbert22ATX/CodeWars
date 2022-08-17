function multiplyAll(arr) {
    return function (n) {
        return arr.map((x) => x * n);
    };
}


console.log(multiplyAll([1, 2, 3])(2));

var FilterString = function (value) {
    return +value
        .split("")
        .map((x) => +x)
        .filter((x) => x >= 0)
        .join('')
};

console.log(FilterString("1d23"));
console.log(FilterString("abc123"));

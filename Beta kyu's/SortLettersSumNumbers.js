function sortAndSum(...arg) {
    let sum = 0;
    arg.forEach((x) => {
        if (typeof x === "number") {
            sum += x;
        }
    });
    let letter = arg.filter((x) => typeof x === "string").sort()
    letter.push(sum)
    return letter
}

console.log(sortAndSum(1, 3, "a", 4, "f", "e", 5, "c"));

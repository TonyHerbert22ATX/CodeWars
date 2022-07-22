function noOdds(values) {
    return values
        .map((x) => {
            if (x % 2 === 0) {
                return x;
            }
        })
        .filter((x) => x !== undefined);
}

console.log(noOdds([0, 1]));
console.log(noOdds([0, 1, 2, 3]));

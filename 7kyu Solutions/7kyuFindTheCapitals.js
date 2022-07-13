var capitals = function (word) {
    return word
        .split("")
        .map((x, i) => {
            if (x === x.toUpperCase()) {
                return i;
            }
        })
        .filter((x) => typeof x === "number");
};

console.log(capitals("CodEWaRs"));

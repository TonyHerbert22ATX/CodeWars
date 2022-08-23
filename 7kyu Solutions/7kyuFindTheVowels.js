function vowelIndices(word) {
    return word
        .split("")
        .map((e, i) => {
            if (e.toLowerCase() === "a") {
                return i + 1;
            } else if (e.toLowerCase() === "e") {
                return i + 1;
            } else if (e.toLowerCase() === "i") {
                return i + 1;
            } else if (e.toLowerCase() === "o") {
                return i + 1;
            } else if (e.toLowerCase() === "u") {
                return i + 1;
            } else if (e.toLowerCase() === "y") {
                return i + 1;
            }
        })
        .filter((x) => x !== undefined);
}

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));

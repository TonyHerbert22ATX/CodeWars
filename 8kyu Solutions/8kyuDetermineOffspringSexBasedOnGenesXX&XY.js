function chromosomeCheck(sperm) {
    return sperm.split("").some((x) => x === "Y")
        ? "Congratulations! You're going to have a son."
        : "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck("XY"));
console.log(chromosomeCheck("XX"));

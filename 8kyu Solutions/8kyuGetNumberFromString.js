function getNumberFromString(s) {
    return Number(
        s
            .split("")
            .filter((x) => "0" <= x && x <= "9")
            .join("")
    );
}

console.log(getNumberFromString("1"));
console.log(getNumberFromString("123"));
console.log(getNumberFromString("10000000000"));
console.log(getNumberFromString("He110"));

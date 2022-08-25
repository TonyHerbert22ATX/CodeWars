function divCon(x) {
    let total = x
        .filter((e) => typeof e === "number")
        .reduce((a, c) => a + c, 0);
    let minus = x
        .filter((e) => typeof e === "string")
        .reduce((a, c) => a + +c, 0);
    return total - minus;
}

console.log(divCon([9, 3, "7", "3"]));

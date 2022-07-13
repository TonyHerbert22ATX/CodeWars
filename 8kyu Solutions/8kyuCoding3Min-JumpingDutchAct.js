function sc(floor) {
    if (floor <= 1) return "";
    return floor > 6
        ? `${"Aa~ ".repeat(floor - 1)}Pa!`
        : `${`${"Aa~ ".repeat(floor - 1)}Pa! Aa!`}`;
}

console.log(sc(2));
console.log(sc(6));
console.log(sc(7));

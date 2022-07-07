function add3bits(x, y, z) {
    if (typeof x !== "number") return null;
    if (typeof y !== "number") return null;
    if (typeof z !== "number") return null;
    if (x <= 1 && y <= 1 && z <= 1 && x >= 0 && y >= 0 && z >= 0) {
        return (x + y + z)
            .toString(2)
            .padStart(2, 0)
            .split("")
            .map((x) => +x);
    } else {
        return null;
    }
}

console.log(add3bits(0, 0, 0));
console.log(add3bits(1, 0, 1));
console.log(add3bits(0, 0, 1));
console.log(add3bits(1, "Hello World", true));

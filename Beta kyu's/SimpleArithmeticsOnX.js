function calc(x) {
    return (
        x *
            x
                .toString()
                .split("")
                .map((x) => +x)
                .reduce((a, c) => a + c, 0) -
        x
            .toString()
            .split("")
            .map((x) => +x)
            .reverse()
            .join("")
    );
}

console.log(calc(4));
console.log(calc(21));

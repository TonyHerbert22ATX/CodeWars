function build(val) {
    let arr = Array.from(arguments);
    let floor = `|${"-".repeat(arr[0])}|`;
    let base = `|${"_".repeat(arr[0])}|`;
    let all = Array(arr[1] - 1).fill(floor);
    all.push(base);
    return all.join("\n");
}

console.log(build(2, 10));
console.log(build(4, 11));



function symmetricPoint(p, q) {
    let diff = [-(p[0] - q[0]), -(p[1] - q[1])];
    return [q[0] + diff[0], q[1] + diff[1]];
}

console.log(symmetricPoint([0, 0], [1, 1]));
console.log(symmetricPoint([2, 6], [-2, -6]));

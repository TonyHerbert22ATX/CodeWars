function isPythagoreanTriple(integers) {
    let d = integers.sort((a, z) => a - z).map((e) => e * e);
    return d[0] + d[1] === d[2] ? true : false;
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));
console.log(isPythagoreanTriple([72, 78, 30]));

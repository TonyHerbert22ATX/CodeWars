function potatoes(p0, w0, p1) {
    let dryI = 100 - p0;
    let dryA = 100 - p1;
    return Math.floor(w0 * (dryI / dryA));
}

console.log(potatoes(99, 100, 98));
console.log(potatoes(82, 127, 80));
console.log(potatoes(93, 129, 91));

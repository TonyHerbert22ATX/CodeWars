function cutCube(volume, n) {
    let a = Math.cbrt(volume / n);
    console.log(a);
    let b = Math.cbrt(n);
    console.log(b);
    if (a % 1 === 0 && b % 1 === 0) {
        return true;
    } else return false;
}

console.log(cutCube(27, 27));
console.log(cutCube(512, 8));
console.log(cutCube(512, 64));

console.log(cutCube(432, 16));
console.log(cutCube(256, 8));
console.log(cutCube(256, 4));
console.log(cutCube(27, 3));
console.log(cutCube(123, 456));

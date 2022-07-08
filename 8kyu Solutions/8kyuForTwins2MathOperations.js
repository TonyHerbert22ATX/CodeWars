function iceBrickVolume(radius, bottleLength, rimLength) {
    let area = radius * 2;
    let height = bottleLength - rimLength;
    return height * area * radius;
}

console.log(iceBrickVolume(1, 10, 2));
console.log(iceBrickVolume(5, 30, 7));

function pointsPer48(ppg, mpg) {
    if (ppg === 0) return 0;
    let ppm = ppg / mpg;
    return +(ppm * 48).toFixed(1);
}

console.log(pointsPer48(12, 20));
console.log(pointsPer48(10, 10));
console.log(pointsPer48(5, 17));

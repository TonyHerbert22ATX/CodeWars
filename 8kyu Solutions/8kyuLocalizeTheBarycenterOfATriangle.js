function barTriang(p1, p2, p3) {
    let XO = ((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
    let YO = ((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
    return [Number(XO), Number(YO)];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]));
console.log(barTriang([0, 0], [1, 3], [-1, 6]));
console.log(barTriang([0, 0], [1, 6], [8, -6]));

function isIsocele(x1, y1, x2, y2, x3, y3) {
    return (x2 - x1) ** 2 + (y2 - y1) ** 2 == (x3 - x2) ** 2 + (y3 - y2) ** 2;
}

console.log(isIsocele(0, 0, 4, 2, 8, 0));
console.log(isIsocele(0, 0, 2, 2, 9, 0));

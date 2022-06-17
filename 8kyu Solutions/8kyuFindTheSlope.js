function slope(points) {
    let y = (points[3] - points[1])
    let x = (points[2] - points[0]);
    if(x === 0) return 'undefined'
    return String(y/x)
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([-10, 6, -10, 3]));

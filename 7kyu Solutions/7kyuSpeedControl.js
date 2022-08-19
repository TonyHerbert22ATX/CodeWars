function gps(s, x) {
    if (x <= 1) return 0;
    let speed = [];
    for (let i = 0; i < x.length; i++) {
        speed.push((3600 * (x[i + 1] - x[i])) / s);
    }
    speed.pop();
    return Math.floor(speed.sort((a, z) => z - a)[0]);
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
//74
console.log(gps(15, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
//41

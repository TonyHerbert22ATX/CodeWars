function nearestSq(n) {
    let a = Math.sqrt(n);
    let b = Math.round(a);
    return b * b;
}

console.log(nearestSq(1));
console.log(nearestSq(2));
console.log(nearestSq(10));
console.log(nearestSq(111));
console.log(nearestSq(9999));

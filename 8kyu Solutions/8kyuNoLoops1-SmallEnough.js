function smallEnough(a, limit) {
    return a.every(x => x <= limit)
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

function averageSquaredInt(arr) {
    let x = arr.filter((x) => x > 0 && x % 2 === 0);
    if (x.length > 0) {
        let n = x.map((x) => {
            return Math.round(x * x);
        });
        return Math.round(
            n.reduce((acc, count) => (acc += count), 0) / x.length
        );
    }else{
        return 0
    }
}

console.log(averageSquaredInt([4, 5.6, -9.8, 3.14, 42, 6, 8.34]));
console.log(averageSquaredInt([-4, -5.6, -9.8, -3.14, -42, -6, -8.34]));
console.log(averageSquaredInt([4, -5.6, -9.8, 3.14, -42, -6, -8.34]));

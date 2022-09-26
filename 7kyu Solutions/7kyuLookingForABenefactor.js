
function newAvg(arr, newavg) {
    const donators = arr.length + 1;
    let remaining = newavg * donators;
    for (let donation of arr) {
        remaining -= donation;
    }
    if (remaining > 0) return Math.ceil(remaining);
    throw "Expected New Average is too low";
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 30));
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 2));

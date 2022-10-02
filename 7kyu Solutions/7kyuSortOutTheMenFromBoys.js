function menFromBoys(arr) {
    let even = Array.from(new Set(arr.filter((num) => num % 2 === 0).sort((a, z) => a - z)));
    let odd = Array.from(new Set(arr.filter((num) => num % 2 !== 0 ).sort((a, z) => z - a)));
    return [...even, ...odd];
}

console.log(menFromBoys([7, 3, 14, 14, 17]));
console.log(menFromBoys([2, 43, 95, 90, 37]));
console.log(menFromBoys([-32,-39,-35,-41]));

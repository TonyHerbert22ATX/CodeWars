function dutyFree(normPrice, discount, hol) {
let dis = normPrice * (discount/100)
let howMany = hol /dis
return Math.floor(howMany)
}

console.log(dutyFree(10, 10, 500));
console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17,10,500));
console.log(dutyFree(24,35,3000));

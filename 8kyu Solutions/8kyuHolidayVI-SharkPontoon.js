function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) sharkSpeed /= 2;
    if (youSpeed === 0) return "Shark Bait!";
    if (sharkSpeed === 0) return "Alive!";
    while (pontoonDistance > 0) {
        sharkDistance -= sharkSpeed;
        pontoonDistance -= youSpeed;
    }
    if (pontoonDistance <= 0 && pontoonDistance < sharkDistance) {
        return "Alive!";
    } else {
        return "Shark Bait!";
    }
}

console.log(shark(12, 50, 4, 8, true));
console.log(shark(7, 55, 4, 16, true));
console.log(shark(24, 0, 4, 8, true));
console.log(shark(24, 0, 4, 8, false));
console.log(shark(27, 129, 0, 2, false));

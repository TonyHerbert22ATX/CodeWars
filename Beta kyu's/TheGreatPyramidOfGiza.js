function buildPyramidTime(strength, skill) {
    // Only change code below this line
    let year = strength + skill;
    if (year < 10) {
        return "receive 10000 gold coins";
    } else if (year >= 10 && year <= 15) {
        return "receive 5000 gold coins";
    } else {
        return "receive 3000 gold coins";
    }
    // Only change code above this line
}

console.log(buildPyramidTime(11, 6));

function bloodAlcoholContent(drinks, weight, sex, time) {
    let ratio = 0;
    if (sex === "male") {
        ratio = 0.73;
    }
    if (sex === "female") {
        ratio = 0.66;
    }
    let BAC =
        ((drinks.ounces * drinks.abv * 5.14) / weight) * ratio - 0.015 * time;
    return +BAC.toFixed(4);
}

console.log(bloodAlcoholContent({ ounces: 12.5, abv: 0.4 }, 190, "male", 1));
console.log(bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, "female", 1));

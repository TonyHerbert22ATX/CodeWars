function fuelPrice(litres, pricePerLitre) {
    if (litres >= 10) {
        pricePerLitre -= 0.25;
        return Number((litres * pricePerLitre).toFixed(2));
    } else if (litres >= 8) {
        pricePerLitre -= 0.2;
        return Number((litres * pricePerLitre).toFixed(2));
    } else if (litres >= 6) {
        pricePerLitre -= 0.15;
        return Number((litres * pricePerLitre).toFixed(2));
    } else if (litres >= 4) {
        pricePerLitre -= 0.1;
        return Number((litres * pricePerLitre).toFixed(2));
    } else if (litres >= 2) {
        pricePerLitre -= 0.05;
        return Number((litres * pricePerLitre).toFixed(2));
    } else {
        return Number((litres * pricePerLitre).toFixed(2, 0));
    }
}

console.log(fuelPrice(5, 1.23));
console.log(fuelPrice(8, 2.5));

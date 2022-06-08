function twiceOfANumber(addedValue, totalValue) {
    if (typeof addedValue === "string" || typeof totalValue === "string") {
        addedValue = Number(addedValue);
        totalValue = Number(totalValue);
        let remain = totalValue - addedValue;
        return remain / 2;
    } else if (typeof addedValue != "number" || typeof totalValue != "number") {
        return null;
    } else {
        let remain = totalValue - addedValue;
        return remain / 2;
    }
}

console.log(twiceOfANumber(4, 20));
console.log(twiceOfANumber(true, 20));
console.log(twiceOfANumber(4, false));
console.log(twiceOfANumber(4, "20"));

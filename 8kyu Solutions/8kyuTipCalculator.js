function calculateTip(amount, rating) {
    let obj = {
        terrible: 0,
        poor: 5,
        good: 10,
        great: 15,
        excellent: 20,
    };

    for (let property in obj) {
        if (rating.toLowerCase() === property) {
            return Math.ceil(`${(amount * obj[property]) / 100}`);
        }
    }
    return "Rating not recognised";
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(20, "GREAT"));
console.log(calculateTip(20, "GRasdfEAT"));

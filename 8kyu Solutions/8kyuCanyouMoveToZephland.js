function immigration(a) {
    let testL = a.Zephlish * 0.03;
    let testM = a.Math * 0.03;
    let score = testL + testM;
    if (a.crime === true) {
        score -= 3;
    }
    let money = a.investment.split("USD").join("");
    if (money > 1000000) {
        score += 2;
    }
    if (a.programmer === true) {
        score += 2;
    }
    console.log(score);
    return score >= 6
        ? "Welcome to Zephland!"
        : "Sorry, your application is rejected.";
}

console.log(
    immigration({
        Zephlish: 67,
        Math: 90,
        crime: true,
        investment: "1000000USD",
        programmer: true,
    })
);
console.log(
    immigration({
        Zephlish: 87,
        Math: 90,
        crime: false,
        investment: "9870000USD",
        programmer: true,
    })
);

function scoreOfDive(scores, tariff) {
    scores = scores.sort((a, z) => a - z);
    scores.shift();
    scores.shift();
    scores.pop();
    scores.pop();
    return (scores.reduce((a,c)=> a + c, 0) * tariff).toFixed(2)
}

console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3));

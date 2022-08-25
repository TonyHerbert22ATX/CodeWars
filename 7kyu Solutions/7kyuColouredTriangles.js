function triangle(row) {
    let answer = [];
    if (row.length === 1) return row;
    for (let i = 0; i < row.length; i++) {
        answer.push(row[i] + row[i + 1]);
    }
    answer.pop();
    for (let j = 0; j < answer.length; j++) {
        if (answer[j] === "RR" || answer[j] === "BG" || answer[j] === "GB") {
            answer[j] = "R";
        } else if (
            answer[j] === "GG" ||
            answer[j] === "RB" ||
            answer[j] === "BR"
        ) {
            answer[j] = "G";
        } else if (
            answer[j] === "BB" ||
            answer[j] === "RG" ||
            answer[j] === "GR"
        ) {
            answer[j] = "B";
        }
    }
    return triangle(answer.join(""));
}

console.log(triangle("RBRGBRBGGRRRBGBBBGG"));
console.log(triangle("RRGBRGBB"));
console.log(triangle("GB"));
console.log(triangle("RRR"));
console.log(triangle("RGBG"));

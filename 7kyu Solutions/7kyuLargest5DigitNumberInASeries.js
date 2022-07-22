function solution(digits) {
    let large = 0;
    for (let i = 0; i < digits.length; i++) {
        if (Number(digits.slice(i, i + 5)) > large) {
            large = Number(digits.slice(i, i + 5));
        }
    }
    return large;
}

console.log(solution("1234567890"));
console.log(solution("1234567898765"));

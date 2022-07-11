function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}

console.log(solution("45", "1"));
console.log(solution("1", "45"));
console.log(solution("Soon", "Me"));

function solution(value) {
    return `Value is ${String(value).padStart(5, "0")}`;
}

console.log(solution(5));
console.log(solution(1204));

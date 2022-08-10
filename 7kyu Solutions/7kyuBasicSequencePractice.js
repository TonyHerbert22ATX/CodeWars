function sumOfN(n) {
    let answer = [];
    let current = 0;
    for (let i = 0; i <= Math.abs(n); i++) {
        current += i;
        answer.push(current);
    }
    return n < 0
        ? answer.map((e) => {
              if (e > 0) {
                  return -e;
              } else {
                  return 0;
              }
          })
        : answer;
}

console.log(sumOfN(3));
console.log(sumOfN(5));
console.log(sumOfN(-5));

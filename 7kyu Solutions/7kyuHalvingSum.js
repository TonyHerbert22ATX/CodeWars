function halvingSum(n) {
    let result = n
    for(let i = 2; n / i > 1; i *= 2){
        result += Math.floor(n / i)
    }
    return result
}

console.log(halvingSum(25));
console.log(halvingSum(127));

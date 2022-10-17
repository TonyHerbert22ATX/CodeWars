function solution(string,limit){
    let result = string.substring(0,limit)
    return (string.length <= limit) ? result : `${result}...`
}

console.log(solution('Testing String',3))
console.log(solution('Testing String',8))
console.log(solution('Test',8))
function solution(pairs) {
    let string = "";
    for (let prop in pairs) {
        string += `${prop} = ${pairs[prop]},`;
    }
    string = string.split('')
    string.pop()
    return string.join('')
}

console.log(solution({ a: 1, b: "2" }));

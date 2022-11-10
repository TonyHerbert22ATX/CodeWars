function solve(s){
    result = 0
    let test = s.replace(/[^aeiou]/g, ' ').split(' ')
    for(let v of test){
        if(result < v.length){
            result = v.length
        }
    }
    return result
}



console.log(solve('codewarriors'));
console.log(solve('suoideas'));
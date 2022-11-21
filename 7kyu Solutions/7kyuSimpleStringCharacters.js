function solve(s){
    let countUpper = s.replace(/[^A-Z]/g, '0').split('0').join('').length
    let countLower = s.replace(/[^a-z]/g, '0').split('0').join('').length
    let countNum = s.replace(/[^0-9]/g, 'a').split('a').join('').length
    let countSpecial = s.length - countUpper - countLower - countNum
    return [countUpper, countLower, countNum, countSpecial]
}


console.log(solve("Codewars@codewars123.com"))
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))
function squareDigits(num){
  return Number(`${num}`.split('').map(n => n * n).join(''))
}

console.log(squareDigits(3212))
console.log(squareDigits(2112))
// console.log(getCount(''))
// console.log(getCount(''))





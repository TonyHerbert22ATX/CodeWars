function isDivideBy(number, a, b) {
  return (number % a === 0 && number % b === 0)?true:false
}

console.log(isDivideBy(-12,2,-6))
console.log(isDivideBy(-12,2,-5))
console.log(isDivideBy(45,1,6))
console.log(isDivideBy(45,5,15))
console.log(isDivideBy(4,1,4))
console.log(isDivideBy(15,-5,3))
// console.log(countBy([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))





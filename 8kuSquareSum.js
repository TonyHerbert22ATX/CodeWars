function squareSum(numbers){
  return numbers.map(x => Math.pow(x,2)).reduce((acc,i)=> acc + i, 0)
}


console.log(squareSum([1,2]))
console.log(squareSum([1,2,2]))
console.log(squareSum([0,3,4,5]))


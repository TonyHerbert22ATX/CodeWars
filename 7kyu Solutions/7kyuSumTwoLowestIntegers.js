// Sum Numbers
function sumTwoSmallestNumbers(numbers) {  
  let lowest = numbers.sort((a,b)=> a-b)
  return lowest[0]+lowest[1]
}

console.log(sumTwoSmallestNumbers([5,8,12,19,22])) 
console.log(sumTwoSmallestNumbers([15,28,4,2,43]))   
console.log(sumTwoSmallestNumbers([5,387,45,12,7]))   





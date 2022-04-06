var summation = function (num) {
  let count = 1
  let total = 0
  while(num >= count){
    total += count
    count++
  }
  return total
}

console.log(summation(1))
console.log(summation(8))





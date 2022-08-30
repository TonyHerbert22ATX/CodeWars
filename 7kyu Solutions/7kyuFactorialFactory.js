
//This function should return n!
function factorial (n) {
  if(n < 0) return null
  let result = 1
  for(let i = n; i > 0; i--){
    result *= i
  }
  return result
}


console.log(factorial(2));
console.log(factorial(5));
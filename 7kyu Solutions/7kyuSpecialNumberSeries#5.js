function specialNumber(n){
  let arr = [...String(n)].map(num=> +num)
  let result = ''
  for(let num of arr){
    console.log(num)
    if(num > 5){
        result = "NOT!!"
        break;
    }else{
        result = 'Special!!'
    }
  }
  return result
}

console.log(specialNumber(2))
console.log(specialNumber(9))
console.log(specialNumber(23))
console.log(specialNumber(39))
console.log(specialNumber(513))
console.log(specialNumber(709))
console.log(specialNumber(92))
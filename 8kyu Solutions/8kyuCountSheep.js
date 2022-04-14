var countSheep = function (num){
  let sheep = []
  for(let i = 1; i <= num; i++){
    sheep.push(`${i} sheep...`)
  }
  return sheep.join('')
}


console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))







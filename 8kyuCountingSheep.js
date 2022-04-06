function countSheeps(arrayOfSheep) {
  let total = 0
  arrayOfSheep.forEach(x => {
    if(x === true){
      return total += 1
    }else{
      return total
    }
  })
  return total
}



var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log(countSheeps(array1))


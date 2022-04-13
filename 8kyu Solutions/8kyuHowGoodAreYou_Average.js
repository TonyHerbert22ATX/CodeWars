function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((acc,points) => acc + points, 0) / classPoints.length
  return (yourPoints > average)?true:false 
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88],75))
console.log(betterThanAverage([2, 3],5))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))





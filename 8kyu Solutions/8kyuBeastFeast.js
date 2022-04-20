function feast(beast, dish) {
  let arrB = beast.split("");
  let arrD = dish.split("");
  return (arrB[0] === arrD[0] && arrB[arrB.length-1] === arrD[arrD.length-1])?true:false
}


console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("brown bear", "bear claw"));
// console.log(firstNonConsecutive("RqaEzty"));
// console.log(firstNonConsecutive("cwAt"));


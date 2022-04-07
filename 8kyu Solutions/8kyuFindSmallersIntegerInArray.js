
  function findSmallestInt(args) {
    return args.sort((a,b) => a - b).shift()
  }



console.log(findSmallestInt([-1, 2, -3, 4, -5]))   
console.log(findSmallestInt([1,2,3,4,5]))   


// ! This is the solution for code wars. You need the class. 
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//     return args.sort((a,b) => a - b).shift()
//   }
// }



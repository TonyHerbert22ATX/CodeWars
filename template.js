// Given an [] , min 3, all #'s, repeats allowed  && size of MAX

// find the product * of MAX #'s && return total #




function maxProduct(array, size){
  //sort array
  let sortArr = array.sort((a,z)=> a - z)
  console.log(sortArr);
  // grab size of max numbers
  return sortArr.splice(-size).reduce((acc, concurrent )=> acc * concurrent, 1)
}

console.log(maxProduct([4,3,5], 2))
console.log(maxProduct([10, 8, 7, 9], 3))
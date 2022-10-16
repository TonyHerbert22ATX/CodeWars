reverse = function(array) {
  let arr = []
  for(let item of array){
    arr.unshift(item)
  }
  return arr
}

console.log(reverse([1,2,3]));
console.log(reverse([1,null,14,'two']));
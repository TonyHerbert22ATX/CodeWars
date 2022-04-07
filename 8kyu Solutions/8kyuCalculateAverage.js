function find_average(array) {
  if(array != ''){
  return array.reduce((acc, i) => acc + i, 0) / array.length
  }else{
    return 0
  }
}


console.log(find_average([1,1,1]))
console.log(find_average([1,2,3]))
console.log(find_average([1,2,3,4]))



function arrayPlusArray(arr1, arr2) {
  let total = 0
  for(let i = 0; i < arr1.length; i++){
    total += arr1[i] + arr2[i]
  }
  return total 
}




console.log(arrayPlusArray([1,2,3],[4,5,6]))
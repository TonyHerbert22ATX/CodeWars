function positiveSum(arr) {
  let negative = []
  let sum = 0
  for( let i= 0; i < arr.length; i++ ){
    if(arr[i] < 0){
      negative.push(arr[i])
    }else{
      sum += arr[i]
    }
  }
  return sum
}


positiveSum([1,-4,7,12])
positiveSum([1,2,3,4,5])


// let total = arr.reduce((acc,i) => acc += i ,0)
//     console.log(total);
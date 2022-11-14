function order(words){
  let arr = words.split(' ')
  let newArr = []
  for(let i = 0; i <= arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j].includes(`${i}`)){
            newArr.push(arr[j])
        }
    }
  }
  return newArr.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
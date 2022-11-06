function sortArray(array) {
  let sortArr = [...array].filter(num=> num % 2 === 1 ||num % 2 === -1).sort((a,b)=>a-b)
  let result = []
    for(let i = 0 ; i < array.length; i++){
        if(array[i] % 2 === 1 || array[i] % 2 === -1){
            result.push(sortArr[0])
            sortArr.shift()
        }else{
            result.push(array[i])
        }
    }
    return result
}

console.log(sortArray([-5,-3,2,8,1,4]), '[1,3,2,8,5,4]');
console.log(sortArray([-11, 17, 36,  15, -23, 7, 12, 49, -23,   9]), '[-23, -23, 36, -11, 7, 9, 12, 15, 17, 49 ]');
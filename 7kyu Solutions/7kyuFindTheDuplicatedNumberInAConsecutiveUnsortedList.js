function findDup( arr ){
    let duplicateValue = ''
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                duplicateValue = arr[i]
            }
        }
    }
  return duplicateValue;
}


console.log(findDup([1,2,2,3]))
console.log(findDup([1,3,2,5,4,5,7,6]))
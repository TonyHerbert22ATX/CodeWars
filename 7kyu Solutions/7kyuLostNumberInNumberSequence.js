function findDeletedNumber(arr, mixArr) {
   let missingNum = 0
   for(let num of arr){
    if(!mixArr.includes(num)){
        missingNum = num
    }
   }
   return missingNum
}


console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), '2');
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), '5');
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), '0');
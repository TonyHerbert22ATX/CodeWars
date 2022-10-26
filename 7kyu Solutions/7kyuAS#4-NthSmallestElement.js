// Array of #'s....  Always numbers. Positive/Negative .. > 3 ... duplicates allowed
// Nth smallest... position from Small -> large... Always Positive Number




function nthSmallest(array, position){
    //sort the array smallest -> largest
    let sortArray = array.sort((a,z)=> a - z)
    console.log(sortArray)
    //find Nth position
    return sortArray[position-1]
}


console.log(nthSmallest([3,1,2],2), '2');
console.log(nthSmallest([15,20,7,10,4,3],3), '7');
console.log(nthSmallest([2,169,13,-5,0,-1],4), '2');
console.log(nthSmallest([,2,1,3,3,1,2,],3), '2');
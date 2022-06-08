function elShuffle(arr1, arr2) {
    if(arr2[1] > arr1.length){
        return arr1
    }
    let remove = arr1.splice(arr2[1], 1, arr2[0]);
    return arr1;
}

console.log(elShuffle([4, 2, 7, 5], [2, 3]));
console.log(elShuffle([9, 5, 8, 3], [6, 2]));
console.log(elShuffle([3, 3, 4, 2], [4, 9]));

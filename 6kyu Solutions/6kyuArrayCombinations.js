//given multiple arrays (sub arrays).... non-unique. Always numbers

// # of unique arrays by picking one element from each subarray



function solve(arr){
    // remove all dups
    let removeDupsArr = arr.map((array)=> Array.from(new Set(array)))
    // Get length of each sub array and multiple by other sub arrays  to get unique # of values
    return removeDupsArr.map((array)=> array.length).reduce((acc,curr)=> acc * curr, 1)
}





console.log(solve([[1,2],[4],[5,6]]), 4)
console.log(solve([[1,2],[4,4],[5,6,6]]), 4)
console.log(solve([[1,2],[3,4],[5,6]]), 8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]), 72)

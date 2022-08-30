function min(arr, toReturn) {
    let smallest = arr[0]
    for(let num of arr){
        if(num < smallest){
            smallest = num
        }
    }
    return (toReturn === 'value')? smallest : arr.indexOf(smallest)
}

console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([5, 4, 1, 2, 3], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));

function arr2bin(arr) {
    return arr.filter(x => typeof x === 'number').reduce((a,c) => a + c, 0).toString(2)
}

console.log(arr2bin([1, 2]));
console.log(arr2bin([1, 2,'a']));
console.log(arr2bin([1, 2, 3, 4, 5]));
console.log(arr2bin([]));
console.log(arr2bin([null]));
console.log(arr2bin([true,true,false,15]));


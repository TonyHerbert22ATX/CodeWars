function head(arr) {
    return arr[0];
}
function tail(arr) {
    return arr.slice(1)
}
function init(arr) {
    return arr.slice(0,-1);
}
function last(arr) {
    return arr[arr.length - 1]
}


console.log(head([5, 1]));

console.log(tail([1]));

console.log(init([1, 5, 7, 9]));
console.log(init([22,20,50,45,13,3150,35,20,20,37,16,46,43,37,39,22,29,41]));

console.log(last([7, 2]));
console.log(last([44]));






const find = (array, element) =>
    array.includes(element) ? array.indexOf(element) : `Not found`;

var array = [2, 3, 5, 7, 11];
console.log(find(array, 5));
console.log(find(array, 11));
console.log(find(array, 8));

let arr = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(arr, "Hello World"));

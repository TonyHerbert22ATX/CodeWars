function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0){
      odd.push(arr[i])
    }else{
      even.push(arr[i])
    }
  }
  return [odd, even];
}

console.log(pickIt([1, 2]));
console.log(pickIt([1, 2, 3]));
console.log(pickIt([10, 20, 30]));
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));

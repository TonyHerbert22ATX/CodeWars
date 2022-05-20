function lastTwo(arr) {
  return arr.slice(arr.length -2, arr.length).sort((a,z)=> a-z)
}

console.log(lastTwo([5, 6, 2, 7, 9, 1]));
console.log(lastTwo([3, 8]));
console.log(lastTwo([10, 2]));

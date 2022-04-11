let arr = [3, 5, 8, 13];

function eachCons(array, n) {
  let a = [];
  for (let i = 0; i < array.length; i++) {
    a.push(array.slice(i, i + n));
  }
  return a.filter(e => e.length === n)
}


console.log(eachCons(arr, 1));
console.log(eachCons(arr, 2));
console.log(eachCons(arr, 3));

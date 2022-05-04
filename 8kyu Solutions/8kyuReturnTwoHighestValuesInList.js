function twoHighest(arr) {
  let sort = Array.from(new Set(arr.sort((a, b) => a - b)))
  if (sort.length < 2) {
    return sort;
  } else {
    return [sort[sort.length-1],sort[sort.length-2]]
  }
}

console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));
console.log(twoHighest([4,10,10,9]));

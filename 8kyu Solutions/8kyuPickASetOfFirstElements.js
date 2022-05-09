function first(arr, n) {
  if (n > 0) {
    return arr.slice(0, n);
  } else if (n === 0) {
    return [];
  } else {
    return [arr[0]];
  }
}

console.log(first(["a", "b", "c", "d", "e"]));
console.log(first(["a", "b", "c", "d", "e"], 3));

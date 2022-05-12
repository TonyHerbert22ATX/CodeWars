function arrayInterval(array, start, end) {
  return array.filter(x => x >= start && x <= end)
}


console.log(arrayInterval([1, 3, 5, 6, 8, 2, 4, 3], 2, 4));
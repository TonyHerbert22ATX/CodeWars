function addExtra(listOfNumbers) {
  let n = 4
  return listOfNumbers.concat(n)
}

console.log(addExtra([1, 2, 3]));
console.log(addExtra([1, 2]));


// PREP
// P : list of numbers
// R : return the list with an extra number at end
// E : [1,2,3]  // return 4
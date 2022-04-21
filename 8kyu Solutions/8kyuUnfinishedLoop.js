function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++ ) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(2));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));


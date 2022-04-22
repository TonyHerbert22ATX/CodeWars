function findLongest(str) {
  let arr = str.split(" ");
  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest
}


console.log(findLongest("The quick white fox jumped around the massive dog"));
// console.log(well(["good", "bad", "bad", "bad", "bad"]));
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));

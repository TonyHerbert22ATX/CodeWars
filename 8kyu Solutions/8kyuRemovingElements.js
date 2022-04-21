function removeEveryOther(arr) {
  let newArr = [];
  arr.map((x, i) => {
    if (i % 2 === 0) {
      newArr.push(x);
    }
  });
  return newArr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

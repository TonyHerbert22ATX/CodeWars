function strCount(str, letter) {
  let arr = str.split("");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      total = total + 1;
    }
  }
  return total;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));

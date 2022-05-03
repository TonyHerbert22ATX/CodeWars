function padIt(string, n) {
  let result = string;
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      result = `*${result}`;
    } else {
      result = `${result}*`;
    }

    i += 1;
  }

  return result;
}

console.log(padIt("a", 1));
console.log(padIt("a", 2));
console.log(padIt("a", 4));
console.log(padIt("a", 5));

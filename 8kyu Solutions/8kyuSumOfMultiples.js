function sumMul(n, m) {
  let arr = [];
  if ((n === undefined && m === undefined) || n >= m) {
    return "INVALID";
  } else {
    for (let index = n; index < m; index += n) {
      arr.push(index);
    }
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));
console.log(sumMul(3, 13));

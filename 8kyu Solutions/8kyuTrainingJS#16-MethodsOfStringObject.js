function cutIt(arr) {
  let short = Math.min(...arr.map((x) => x.length));
  return arr.map(x=>x.slice(0,short))
}

console.log(cutIt(["ab", "cde", "fgh"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
console.log(cutIt(["codewars", "javascript", "java"]));

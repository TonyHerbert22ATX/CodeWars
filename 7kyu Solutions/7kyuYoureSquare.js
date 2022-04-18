var isSquare = function (n) {
  let root = Math.floor(Math.sqrt(n))
  return root * root === n ? true : false;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(74));

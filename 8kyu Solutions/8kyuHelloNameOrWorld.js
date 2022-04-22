function hello(name) {
  if (name === undefined || name === "") {
    return "Hello, World!";
  } else {
    let first = name.toLowerCase();
    let cap = first[0].toUpperCase() + first.slice(1);
    return `Hello, ${cap}!`;
  }
}

console.log(hello("alice"));
console.log(hello("alicE"));
console.log(hello());
// console.log(index([1, 2], 3));
// console.log(index([1, 2], 2));

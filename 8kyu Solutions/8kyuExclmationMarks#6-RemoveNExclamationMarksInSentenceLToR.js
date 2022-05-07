function remove(s, n) {
  for(let i = n; i > 0; i-- ){
    s = s.replace(/!/, "");
  }
  return s
}

console.log(remove("Hi!", 1   ));
// console.log(remove("Hi!", 100));
console.log(remove("Hi!!!", 1));
console.log(remove("!!!Hi !!hi!!! !hi", 5));
// console.log(remove("!!!Hi !!hi!!! !hi", 100));

// * This was my first try. The below function is refactoring to 1 line. 
// function uniTotal(string) {
//   let total = 0;
//   let addUpString = string.split("").forEach((x) => (total += x.charCodeAt(0)));
//   return total;
// }

function uniTotal(string) {
  return string.split("").reduce((acc,i) => acc += i.charCodeAt(0), 0 )
}

console.log(uniTotal("a"));
console.log(uniTotal("Mary Had A Little Lamb"));



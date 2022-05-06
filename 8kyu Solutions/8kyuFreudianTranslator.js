// ? This is my first attempt
// function toFreud(string) {
//   if(string === ''){
//     return ''
//   }
//   return string.split(' ').map(x=> x='sex').join(' ')
// }

function toFreud(string) {
  return string === ""
    ? ""
    : string
        .split(" ")
        .map((x) => (x = "sex"))
        .join(" ");
}


console.log(toFreud(""));
console.log(toFreud("test"));
console.log(toFreud("This is a test"));
console.log(toFreud("This is a longer test"));
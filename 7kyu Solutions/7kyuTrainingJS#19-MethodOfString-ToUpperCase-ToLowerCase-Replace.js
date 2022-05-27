// ? This was my first solution
// function alienLanguage(str) {
//   let a = str.toUpperCase().split(' ')
//   let f = a.map((x) => x.replace(/[A-Z]$/, x[x.length-1].toLowerCase()))
//   return f.join(' ')
// }

function alienLanguage(str) {
  return str.toUpperCase().split(" ").map((x) => x.replace(/[A-Z]$/, x[x.length - 1].toLowerCase())).join(' ')
}



console.log(alienLanguage('My name is John'));
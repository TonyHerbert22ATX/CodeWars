function fiveLine(s) {
  let a = s.trim()
  return `${a}\n${a}${a}\n${a}${a}${a}\n${a}${a}${a}${a}\n${a}${a}${a}${a}${a}`;
}

console.log(fiveLine("  a"));
console.log(fiveLine("\txy \n"));

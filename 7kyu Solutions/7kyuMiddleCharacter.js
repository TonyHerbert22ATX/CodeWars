function getMiddle(s) {
  let p1 = "";
  let l = "";
  if (s.length % 2 === 0) {
    p1 = s.length / 2 - 1;
    l = 2;
  } else {
    p1 = s.length / 2;
    l = 1;
  }

  return s.substring(p1, p1 + l);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
// console.log(feast("brown bear", "bear claw"));
// console.log(firstNonConsecutive("RqaEzty"));
// console.log(firstNonConsecutive("cwAt"));

function accum(s) {
  let newarr = [];
  s.toUpperCase()
    .split("")
    .forEach((x, i) => {
      let small = x.toLowerCase();
      return newarr.push(x + small.repeat(i));
    });
  return newarr.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

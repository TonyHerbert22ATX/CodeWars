function check(a, x) {
  return a.includes(x);
}

console.log(check([68, 101], "e"));
console.log(check([66, 101], 66));
console.log(check((["what", "a", "great", "kata"], "kat")));

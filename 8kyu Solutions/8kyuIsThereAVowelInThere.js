function isVow(a) {
  return a.map((x) =>
    /[aeiou]/.test(String.fromCharCode(x))
      ? String.fromCharCode(x)
      : x
  );
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

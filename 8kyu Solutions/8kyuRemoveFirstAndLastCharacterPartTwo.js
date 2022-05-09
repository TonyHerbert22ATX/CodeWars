function array(arr) {
  return arr.split(",").length < 3
    ? null
    : arr.split(",").slice(1, -1).join(" ");
}

console.log(array("1,2,3"));
console.log(array("1,2,3,4"));

function array(arr) {
  return arr.split(",").length < 3
    ? null
    : arr.split(",").slice(1, -1).join(" ");
}

String.prototype.isUpperCase = function () {
  if (this == this.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};



// function isUpperCase(str) {
//   return str.toUpperCase() === str ? true : false;
// }

console.log(isUpperCase("hello I AM DONALD"));
console.log(isUpperCase("TONY"));


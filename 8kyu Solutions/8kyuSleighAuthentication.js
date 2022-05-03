function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

console.log(Sleigh("Santa Claus", "Ho Ho Ho!"));

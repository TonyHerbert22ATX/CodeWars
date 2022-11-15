var countBits = function(n) {
  return n.toString(2).split('').map(x => +x).reduce((a,c)=> a+c, 0)
};


console.log(countBits(4));
console.log(countBits(1234));
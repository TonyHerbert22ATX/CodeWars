var Calculator = {
 average: function() {
  let average = [...arguments].reduce((acc, cur) => acc + cur , 0)/ arguments.length
    return (!average)?0:average
 }
};


console.log(Calculator.average())
console.log(Calculator.average(3,4,5))
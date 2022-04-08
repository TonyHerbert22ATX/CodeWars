// Sum Numbers
function sum (numbers) {
  return (numbers===[]) ? 0: numbers.reduce((acc, i) => acc + i, 0)
};

console.log(sum([])) 
console.log(sum([1,5.2,4,0,-1]))   
console.log(sum([-2.398]))   





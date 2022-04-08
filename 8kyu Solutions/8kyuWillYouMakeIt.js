const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false

console.log(zeroFuel(50,25,2)) 
console.log(zeroFuel(100,50,1))   
// console.log(zeroFuel([5,387,45,12,7]))   





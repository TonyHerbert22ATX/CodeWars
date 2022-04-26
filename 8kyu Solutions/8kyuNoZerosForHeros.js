function noBoringZeros(n) {
  return Number(n.toString().replace(/0+$/,''))
}


console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(105));
// console.log(mouthSize("ant bear"));
// console.log(mouthSize("alligator"));

// ? First attemped
// const flip = (d, a) => {
//   if (d === "R") {
//     return a.sort((a, z) => a - z);
//   } else {
//     return a.sort((a, z) => z - a);
//   }
// };

const flip = (d, a) => {
  return d == "R" ? a.sort((a, z) => a - z) : a.sort((a, z) => z - a);
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));

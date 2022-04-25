function validateUsr(username) {
  let res = /^([a-z]|\d|_){4,16}$/
  return (res.test(username))?true:false
}


console.log(validateUsr('asddsa'));
console.log(validateUsr('a'));
console.log(validateUsr('Hass'));
console.log(validateUsr('Hasd+12asssssssssssssdadsad'));
console.log(validateUsr(''));
console.log(validateUsr('____'));
console.log(validateUsr('012'));
console.log(validateUsr("p1pp1"));
// console.log(mouthSize("ant bear"));
// console.log(mouthSize("alligator"));

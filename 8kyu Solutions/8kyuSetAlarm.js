function setAlarm(employed, vacation) {
  return (employed && !vacation)?true:false
}

console.log(setAlarm(true,true));
console.log(setAlarm(false,true));
console.log(setAlarm(true,false));
console.log(setAlarm(false, false));
// console.log(correct(25));
// console.log(correct(74));

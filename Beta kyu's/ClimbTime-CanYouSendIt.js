function canClimb(ropeLength, climbHeight) {
  if (ropeLength*3.281 >= climbHeight*2) {
    return true;
  } else if(ropeLength*3.281 <= climbHeight*2){
    return false
  }else{
    return null
  }
}

console.log(canClimb(0, 1));
console.log(canClimb("hi, String", 1));
console.log(canClimb(100, 1));
console.log(canClimb(6, 1));


// 1 m = 3.281 ft
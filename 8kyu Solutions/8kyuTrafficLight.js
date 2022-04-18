function updateLight(current) {
  if(current === 'green'){
    return 'yellow'
  }else if (current === 'yellow'){
    return 'red'
  }else{
    return 'green'
  }
}

console.log(updateLight('green'));
console.log(updateLight('yellow'));
// console.log(rps("paper", "rock"));
// console.log(rps("rock", "rock"));

function defineSuit(card) {
  if(card.endsWith('\u2660')){
    return 'spades'
  }else if(card.endsWith('\u2666')){
    return 'diamonds'
  }else if(card.endsWith('\u2663')){
    return 'clubs'
  }else{
    return 'hearts'
  }
}

console.log(defineSuit("3 \u2660"));
console.log(defineSuit('\u2660'));



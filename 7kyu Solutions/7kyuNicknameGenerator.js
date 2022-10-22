// string... 4 in length .. less than 4 return 'Error: Name too short'
// ABS.. Name (first capitalized only)


// first 3 or 4 letters as nickname &&  Name (first capitalized only)
// 3... 3rd letter is a const
// 4... 3rd letter is a vowel  (aeiou)


function nicknameGenerator(name){
if(name.length < 4) return 'Error: Name too short'
if(name[2].match(/[aeiou]/)){
  return name.slice(0,4)
}else{
  return name.slice(0,3)
}
}


console.log(nicknameGenerator('Jeannie'), 'Jean');
console.log(nicknameGenerator('Kayne'), 'Kay');
console.log(nicknameGenerator('Kimberly'), 'Kim');
console.log(nicknameGenerator('Tony'), 'Error: Name too short');
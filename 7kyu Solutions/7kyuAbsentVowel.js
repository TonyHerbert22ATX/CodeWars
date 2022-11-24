function absentVowel(x){
    if(x.split('').includes('a') === false) return 0
    if(x.split('').includes('e') === false) return 1
    if(x.split('').includes('i') === false) return 2
    if(x.split('').includes('o') === false) return 3
    if(x.split('').includes('u') === false) return 4
}


console.log(absentVowel("John Doe hs seven red pples under his bsket"));
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));
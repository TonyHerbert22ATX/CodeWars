function duplicateCount(text){
  let string = text.toLowerCase()
  let dups = []
  for(let i = 0; i < string.length; i++){
        for(let j = i; j < string.length; j++){
                if(string[i] === string[j+1]){
                    dups.push(string[j+1])
                }
        }
  }
  return Array.from(new Set(dups)).length
}


console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabcdebc'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('indivisibility'));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('aabBcde'));
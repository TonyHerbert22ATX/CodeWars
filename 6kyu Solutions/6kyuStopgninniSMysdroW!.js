function spinWords(string){
  return string.split(' ').map(word => {
    if(word.length >= 5){
        return word.split('').reverse().join('')
    }else{
        return word
    }
  }).join(' ')
}


console.log(spinWords('Welcome'))
console.log(spinWords('This is a Test'))
console.log(spinWords('this is another test'))
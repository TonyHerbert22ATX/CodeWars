// function (word) is a palindrome?

// word -> str, no empty, no special, no num, no caps, 1 word

// return true || false

// racecar -> true, 
// bob -> true
// tacos -> false


function isPalindrome(word){
  return (word === word.split('').reverse().join(''))
}

console.log(isPalindrome('racecar'),'true')
console.log(isPalindrome('bob'), 'true')
console.log(isPalindrome('tacos'), 'false')
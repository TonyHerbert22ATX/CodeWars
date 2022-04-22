function isPalindrome(x) {
  let word = x.toUpperCase()
  return (word.split('').reverse().join('') === word)?true:false
}

console.log(isPalindrome('aba'));
console.log(isPalindrome("abc"));
// console.log(index([1, 2], 3));
// console.log(index([1, 2], 2));

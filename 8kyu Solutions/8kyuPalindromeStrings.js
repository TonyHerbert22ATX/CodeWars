function isPalindrome(line) {
  return (line === line.split('').reverse().join(''))
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("Walter"));

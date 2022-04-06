function solution(str){
  let splitString = str.split('')
  let reversed = splitString.reverse()
  let backToStr = reversed.join('')
  return backToStr
}

// test

solution('hello')
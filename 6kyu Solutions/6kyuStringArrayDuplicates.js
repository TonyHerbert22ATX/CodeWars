function dup(s) {
  let answer = []
let result = ''
let stringArr = s.forEach(string => {
    for(let i =0; i < string.length; i++){
      if(string[i] !== string[i+1]){
      result += string[i]
      }
    }
    answer.push(result)
    result = ''
  })
  return answer
};


console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))
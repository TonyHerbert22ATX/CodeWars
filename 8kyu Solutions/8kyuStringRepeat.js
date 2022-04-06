function repeatStr(num,str){
  let repeatAnswer = ''
  for(let i = 0; i < num; i++){
    repeatAnswer += str
  }
  return repeatAnswer
}



repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
repeatStr(3, "*") // "IIIIII"



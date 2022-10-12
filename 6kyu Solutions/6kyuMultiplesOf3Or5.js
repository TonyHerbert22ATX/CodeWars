function solution(number){
  if(number <= 0) return 0
  let result = 0
  for(let i = 0; i < number; i++){
    if(i % 5 === 0 || i % 3 === 0){
        result += i
    }
  }
  return result
}

console.log(solution(-10));
console.log(solution(0));
console.log(solution(10));
console.log(solution(15));
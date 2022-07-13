function solution(nums) {
    return(nums === null || nums === [])?[]:nums.sort((a,z)=> a-z)
}

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));

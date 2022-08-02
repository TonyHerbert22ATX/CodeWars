function add(num1, num2) {
    let longest = '';
    let arr1 = [];
    let arr2 = [];
    let answer = []
    if (num1 > num2) {
        longest = String(num1).length;
        arr1 = String(num1)
            .padStart(longest, 0)
            .split("")
            .map((x) => +x);
        arr2 = String(num2)
            .padStart(longest, 0)
            .split("")
            .map((x) => +x);
    } else {
        longest = String(num2).length;
        arr1 = String(num1)
            .padStart(longest, 0)
            .split("")
            .map((x) => +x);
        arr2 = String(num2)
            .padStart(longest, 0)
            .split("")
            .map((x) => +x);
    }
    for(let i = 0; i < arr1.length; i++){
        answer.unshift(arr1[i] + arr2[i])
    }
    return +answer.reverse().join('')
}

console.log(add(2,11));
console.log(add(122, 81));
console.log(add(1236,30977));

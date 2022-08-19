var palindromeChainLength = function (n) {
    let count = 0;
    while (Number(n.toString().split("").reverse().join("")) !== n) {
        n += Number(n.toString().split("").reverse().join(""));
        count++;
    }
    return count;
};

console.log(palindromeChainLength(88));
console.log(palindromeChainLength(87));

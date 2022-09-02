function averages(numbers) {
    if(numbers == null) return []
    if(numbers.length < 2 ) return []
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        arr.push((numbers[i] + numbers[i + 1]) / 2);
    }
    arr.pop()
    return arr
}

console.log(averages([1, 3, 5, 1, -10]));
console.log(averages(null));

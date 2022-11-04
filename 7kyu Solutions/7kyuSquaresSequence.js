// #... only #'s
// amount of squares


// return array of length


function squares(x,n){
    if(n <= 0 ){
        return []
    }
    let result = x
    let arr = [x]
    for(let i = 1; i < n; i++){
        result = result * result
        arr.push(result)
    }
    return arr
}

console.log(squares(2,5), '[2,4,16,256,65536]');
console.log(squares(3,3), '[3, 9, 81]');
console.log(squares(2,0), '[]');
console.log(squares(2,-5), '[]');
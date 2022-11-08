var nthterm = function(first,n,c){
    let arr = [first]
    let value = first
    for(let i = 0; i < n; i++){
        value += c
        arr.push(value)
        
    }
    return arr.pop()
}


console.log(nthterm(1,2,3))
console.log(nthterm(2,2,2))
console.log(nthterm(-50,10,20))
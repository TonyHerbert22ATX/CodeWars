let number = function (array) {
    return array.map((x,i)=>{
        console.log(x);
        console.log(i);
        
        return `${i+1}: ${x}`
    })
};

console.log(number([]));
console.log(number(["a", "b", "c"]));

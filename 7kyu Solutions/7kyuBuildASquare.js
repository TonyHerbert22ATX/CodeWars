function generateShape(integer) {
    let shape = "+".repeat(integer);
    for(let i = 1; i < integer; i++){
        shape += '\n' + "+".repeat(integer)
        
    }
    return shape
}

console.log(generateShape(3));
console.log(generateShape(8));

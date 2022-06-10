function oneBitFullAdder(cin, a, b) {
    if(cin === 1 && a === 1 && b ===1){
        return [1,1]
    }
    if(cin === 0 && a === 0 && b ===0){
        return [0,0]
    }
    if (
        (cin === 1 && a === 0 && b === 0) ||
        (cin === 0 && a === 1 && b === 0) ||
        (cin === 0 && a === 0 && b === 1)
    ) {
        return [0, 1];
    } else{
        return [1,0]
    }
}

console.log(oneBitFullAdder(0, 0, 0));
console.log(oneBitFullAdder(0, 0, 1));
console.log(oneBitFullAdder(0, 1, 1));
console.log(oneBitFullAdder(1, 1, 1));

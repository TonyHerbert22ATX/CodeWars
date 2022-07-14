function getDivisorsCnt(n) {
    let count = 1
    for(let i = 1; i< n; i++){
        if(n % i === 0){
            count += 1
        }
    }
    return count
}


console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
function cookingTime(eggs) {
    let time = 0
    for(let i = 0; i < eggs; i+=8){
        time += 5
    }
    return time
}


console.log(cookingTime(0));
console.log(cookingTime(5));
console.log(cookingTime(10));
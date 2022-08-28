function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0
    let totalHeight = 0
    while(totalHeight <= desiredHeight){
        days++
        totalHeight += upSpeed
        if(totalHeight >= desiredHeight){
            break;
        }
        totalHeight -= downSpeed
    }
    return days
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10,9,4));

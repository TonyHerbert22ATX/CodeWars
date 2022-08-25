function foldTo(distance) {
    if(distance < 0) return null
    let fold = 0;
    let thickness = 0.0001;
    while (thickness <= distance) {
        thickness *= 2;
        fold++;
    }
    return fold;
}

console.log(foldTo(384000000));

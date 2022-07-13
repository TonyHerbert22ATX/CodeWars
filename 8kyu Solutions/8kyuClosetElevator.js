function elevator(left, right, call) {
    let a = Math.abs(left - call)
    let b = Math.abs(right - call)
    return a < b? 'left': 'right'
}

console.log(elevator(0, 1, 0));
console.log(elevator(2, 1, 2));
console.log(elevator(2, 0, 2));




console.log(elevator(0, 1, 1));
console.log(elevator(0, 1, 2));
console.log(elevator(0, 0, 0));
console.log(elevator(0, 2, 1));

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let bRemain = blueStart - bluePulled
    let rRemain = redStart - redPulled
    return bRemain / (bRemain+rRemain)
}

console.log(guessBlue(5, 5, 2, 3));

//  Pw = A / (A+B)
//  Pl = B / (A+B)

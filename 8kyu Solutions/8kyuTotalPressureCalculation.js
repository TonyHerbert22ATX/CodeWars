solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let t = temp + 273.15;
    let top =
        ((givenMass1 * 0.001) / molarMass1 +
            (givenMass2 * 0.001) / molarMass2) *
        0.082 *
        t;
    return top / volume * 1000 ;
};

console.log(solution(44, 30, 3, 2, 5, 50));
console.log(solution(60, 20, 10, 30, 10, 100));



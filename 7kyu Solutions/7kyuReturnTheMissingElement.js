function getMissingElement(superImportantArray) {
    let answer = 0;
    for (let i = 0; i < 9; i++) {
        if (!superImportantArray.includes(i)) {
            answer = i;
        }
    }
    return answer;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

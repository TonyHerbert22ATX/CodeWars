function wordsToMarks(string) {
    let answer = 0;
    for (let letter of string) {
        answer += letter.charCodeAt(0) - 96;
    }
    return answer;
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));

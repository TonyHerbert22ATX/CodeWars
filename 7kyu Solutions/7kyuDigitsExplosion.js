function explode(s) {
    let split = s.split("");
    let answer = "";
    for (let i = 0; i < split.length; i++) {
        answer += split[i].repeat(+split[i]);
    }
    return answer;
}

console.log(explode("312"));
console.log(explode("102269"));

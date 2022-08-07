let s = "abcd\nefgh\nijkl\nmnop";

function vertMirror(strng) {
    let a = strng.split('\n')
    let answer = []
    for(let i = 0; i < a.length; i++){
        answer.push(a[i].split('').reverse().join(''))
    }
    return answer.join('\n')
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    if(fct === vertMirror){
        return vertMirror(s)
    }else{
        return horMirror(s)
    }
}

console.log(oper(vertMirror, s));
console.log(oper(horMirror, s));

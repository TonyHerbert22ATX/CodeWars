// string....
// array of strings (arr)...

// True || False.... if all strings are included in arr



function containAllRots(strng, arr) {
    if (strng === '') return true
    let rotateArr = []
    let strngArr = strng.split('')
    for(let i = 0; i < strng.length ; i++){
        let firstL = strngArr.shift()
        strngArr.push(firstL)
        rotateArr.push(strngArr.join(''))
    }
    for(let str of rotateArr){
        if(!arr.includes(str)){
            return false
        }
    }
    return true
}


console.log(containAllRots('', []));
console.log(containAllRots('', ['bsj','qbs']));
console.log(containAllRots('bsjq', ["bsjq", "qbsj", "sjqb", "jqbs",'yes']));
console.log(containAllRots('tesT', ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]));
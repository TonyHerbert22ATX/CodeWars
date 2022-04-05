function removeChar(str){
    let strArray = str.split('')
    let removeFirst = strArray.shift()
    let removeLast = strArray.pop()
    let finalStr = strArray.join('')
    return finalStr
}




removeChar('Tony')



function charFreq(message) {
    let obj = {}
    for(let i = 0; i < message.length; i++){
        if(obj.hasOwnProperty(message[i])){
            obj[message[i]] += 1
        }else{
            obj[message[i]] = 1
        }
    }
    return obj
}


console.log(charFreq('I likee cats'));
function last(list){
    if(Array.isArray(list)){
        return list[list.length - 1]
    }else{
        let array = [...arguments].join(',').split(',')
        let answer = array[array.length - 1]
        return (+answer)?+answer: (answer.length > 1)? answer.split('').slice(-1).join('') : answer
    }
}




console.log(last([1,2,3,4,5]),5)
console.log(last('abcde'),'e')
console.log(last(1,'b',3,'d',5),5)
console.log(last('a','b','c','z'),'z')
console.log(last(1,2,3,4,5,6,7,8,9,10),'10')
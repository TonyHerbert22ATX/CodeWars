function capMe(names) {
    return names.map(name => {
        let lowerCase = name.toLowerCase()
        return lowerCase[0].toUpperCase() + lowerCase.substring(1)
    })
}


console.log(capMe(['jo','nelson','KARLY','John']))
function currentTime() {
    let date = new Date()
    return `The current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

console.log(currentTime());

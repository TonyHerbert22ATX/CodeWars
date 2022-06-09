function newTweet() {
    let newTweet = "";
    for (let i = 1; i < 180; i++) {
        let random = Math.floor(Math.random() * 255);
        newTweet += String.fromCharCode(random);
    }
    return newTweet;
}

console.log(newTweet());

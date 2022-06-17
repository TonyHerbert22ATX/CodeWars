function checkTheBucket(bucket) {
    return (bucket.includes('gold'))
}


console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]));
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]));
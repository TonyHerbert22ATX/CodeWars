

function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

console.log(generateLink("matt c"));
console.log(generateLink("g964"));
console.log(generateLink("f0KV%3CO%2F%2FW%40_%3C~'"));

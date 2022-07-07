function findEmailDomain(address) {
    return address.split("@").pop();
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain("@@@@@@@hayhay@gmail.com"));

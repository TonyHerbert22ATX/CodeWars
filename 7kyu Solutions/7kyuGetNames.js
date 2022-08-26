const data = [
    { name: "Joe", age: 20 },
    { name: "Bill", age: 30 },
    { name: "Kate", age: 23 },
];

function getNames(data) {
    let result = [];
    for (let prop of data) {
        result.push(Object.values(prop)[0]);
    }
    return result
}

console.log(getNames(data));

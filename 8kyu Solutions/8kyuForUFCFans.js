let quote = function (fighter) {
    return fighter.toLowerCase() === "conor mcgregor"
        ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
        : "I am not impressed by your performance.";
};

console.log(quote("george saint pierre"));
console.log(quote("George Saint pierre"));
console.log(quote("Conor McGregor"));
console.log(quote("conor mcgregor"));

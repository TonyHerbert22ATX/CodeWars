var questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
        corAnswer: 0,
    },
];


questions.map(x => Object.assign(x, {usersAnswer: null}))

console.log(questions);


